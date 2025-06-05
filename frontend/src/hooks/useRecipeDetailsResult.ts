import { useEffect, useState } from 'react';
import { Recipe } from '@/types/recipe';
import { configuration } from '@/config/configuration';
import { Route } from '@/enums/routes.enum';

export const useRecipeDetails = (id: string) => {
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [categoryRecipes, setCategoryRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingCategory, setLoadingCategory] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    async function fetchRecipe() {
      setLoading(true);
      setError(null);

      try {
        const res = await fetch(
          `${configuration.serverUrl}${Route.RECIPE}/${id}`
        );
        if (!res.ok) throw new Error('Recipe not found');
        const data = await res.json();
        setRecipe(data);

        if (data.strCategory) {
          setLoadingCategory(true);
          const categoryRes = await fetch(
            `${configuration.serverUrl}${
              Route.RECIPE
            }?filterType=category&filterValue=${encodeURIComponent(
              data.strCategory
            )}`
          );
          if (categoryRes.ok) {
            const categoryData = await categoryRes.json();
            setCategoryRecipes(categoryData);
          }
          setLoadingCategory(false);
        }
      } catch (err: any) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }

    fetchRecipe();
  }, [id]);

  return { recipe, categoryRecipes, loading, loadingCategory, error };
};
