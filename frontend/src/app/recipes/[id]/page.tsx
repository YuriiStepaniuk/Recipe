'use client';

import RecipeInfoSidebar from '@/components/recipes/RecipeInfoSidebar';
import { useRecipeDetails } from '@/hooks/useRecipeDetailsResult';
import { use } from 'react';
import { extractIngredients } from '@/utils/extractIngredients';
import RecipeImage from '@/components/recipes/RecipeImage';
import RecipeIngredientsList from '@/components/recipes/RecipeIngredientsList';
import RecipeTitleAndCountry from '@/components/recipes/RecipeTitleAndCountry';

interface RecipeInfoPageProps {
  params: Promise<{ id: string }>;
}

const RecipeInfoPage: React.FC<RecipeInfoPageProps> = ({ params }) => {
  const resolvedParams = use(params);
  const id = resolvedParams.id;
  const { recipe, categoryRecipes, loading } = useRecipeDetails(id);

  if (loading) return <p className="text-center mt-8">Loading...</p>;
  if (!recipe) return <p className="text-center mt-8">Recipe not found.</p>;

  const ingredients = extractIngredients(recipe);

  return (
    <div className="max-w-7xl mx-auto p-6 grid grid-cols-1 md:grid-cols-4 gap-6">
      <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6">
        <RecipeImage src={recipe.strMealThumb} alt={recipe.strMeal} />

        <div className="md:col-span-2 flex flex-col space-y-4">
          <RecipeTitleAndCountry
            title={recipe.strMeal}
            country={recipe.strArea}
          />

          <section>
            <h2 className="text-xl font-semibold mb-2">Instructions</h2>
            <p className="whitespace-pre-line">{recipe.strInstructions}</p>
          </section>

          <RecipeIngredientsList ingredients={ingredients} />
        </div>
      </div>

      <RecipeInfoSidebar
        strCategory={recipe.strCategory}
        loadingCategory={loading}
        categoryRecipes={categoryRecipes}
        currentRecipeId={id}
      />
    </div>
  );
};

export default RecipeInfoPage;
