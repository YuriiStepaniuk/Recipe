import RecipeList from '@/components/recipes/RecipeList';

export default function RecipesPage() {
  return (
    <div className="py-8">
      <h1 className="text-3xl font-bold text-center mb-6">Recipes</h1>
      <RecipeList />
    </div>
  );
}
