import { useEffect, useState } from 'react';
import { Recipe, RecipeFilter } from '../types/recipe';
import { Route } from '@/enums/routes.enum';
import { configuration } from '@/config/configuration';

export const useFetchRecipes = (filter?: RecipeFilter) => {
  const [recipes, setRecipes] = useState<Recipe[] | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
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

        const res = await fetch(url.toString());

        if (!res.ok) {
          throw new Error(`Error fetching recipes: ${res.statusText}`);
        }
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error(err);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecipes();
  }, [filter]);
  return { recipes, isLoading, error };
};
