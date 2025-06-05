'use client';

import RecipeCard from './RecipeCard';
import { useFetchRecipes } from '@/hooks/useFetchRecipes';
import RecipeSelectFilter from './RecipeSelectFilter';
import { useEffect, useState } from 'react';
import { RecipeFilter } from '@/types/recipe';
import { useSearchParams } from 'next/navigation';

export default function RecipeList() {
  const searchParams = useSearchParams();

  const [filter, setFilter] = useState<RecipeFilter | undefined>(undefined);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const filterType = searchParams.get('filterType');
    const filterValue = searchParams.get('filterValue');

    if (
      (filterType === 'ingredients' ||
        filterType === 'area' ||
        filterType === 'category') &&
      filterValue?.trim()
    ) {
      setFilter({ filterType, filterValue });
    } else {
      setFilter(undefined);
    }
    setReady(true);
  }, [searchParams]);

  const { recipes, isLoading } = useFetchRecipes(filter, ready);

  if (isLoading) return <p className="text-center">Loading...</p>;
  if (!recipes) return <p className="text-center">No recipes found.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <RecipeSelectFilter />
      {recipes &&
        recipes.map((recipe) => (
          <RecipeCard
            key={recipe.idMeal}
            idMeal={recipe.idMeal}
            strMeal={recipe.strMeal}
            strMealThumb={recipe.strMealThumb}
          />
        ))}
    </div>
  );
}
