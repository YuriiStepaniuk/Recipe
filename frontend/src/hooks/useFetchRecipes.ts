import { useEffect, useState } from 'react';
import { Recipe, RecipeFilter } from '../types/recipe';
import { Route } from '@/enums/routes.enum';
import { configuration } from '@/config/configuration';

export const useFetchRecipes = (
  filter?: RecipeFilter,
  enabled: boolean = true
) => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    if (!enabled) {
      setRecipes(null);
      setIsLoading(false);
      setError(false);
      return;
    }

    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchRecipes = async () => {
      setIsLoading(true);
      setError(false);
      try {
        let baseUrl = `${configuration.serverUrl}${Route.RECIPE}`;
        const url = new URL(baseUrl);

        if (filter) {
          url.searchParams.append('filterType', filter.filterType);
          url.searchParams.append('filterValue', filter.filterValue);
        }

        const res = await fetch(url.toString(), { signal });

        if (!res.ok) {
          throw new Error(`Error fetching recipes: ${res.statusText}`);
        }
        const data = await res.json();
        setRecipes(data);
      } catch (err: any) {
        if (err.name === 'AbortError') {
          console.log(
            'Fetch aborted due to component unmount or dependency change.'
          );
        } else {
          console.error('Error in useFetchRecipes:', err);
          setError(true);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();

    return () => {
      abortController.abort();
    };
  }, [filter, enabled]);
  return { recipes, isLoading, error };
};
