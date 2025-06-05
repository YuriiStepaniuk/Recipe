import { Recipe } from '@/types/recipe';
import Link from 'next/link';

interface RecipeInfoSidebarProps {
  strCategory: string;
  loadingCategory: boolean;
  categoryRecipes: Recipe[];
  currentRecipeId: string;
}

const RecipeInfoSidebar: React.FC<RecipeInfoSidebarProps> = ({
  strCategory,
  loadingCategory,
  categoryRecipes,
  currentRecipeId,
}) => {
  return (
    <aside className="border-l border-gray-300 pl-6 h-full overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">More in {strCategory}</h2>

      {loadingCategory ? (
        <p>Loading category recipes...</p>
      ) : categoryRecipes.length === 0 ? (
        <p>No recipes found in this category.</p>
      ) : (
        <ul className="space-y-2">
          {categoryRecipes
            .filter((r) => r.idMeal !== currentRecipeId)
            .map(({ idMeal, strMeal }) => (
              <li key={idMeal}>
                <Link
                  href={`/recipes/${idMeal}`}
                  className="text-blue-600 hover:underline"
                >
                  {strMeal}
                </Link>
              </li>
            ))}
        </ul>
      )}
    </aside>
  );
};

export default RecipeInfoSidebar;
