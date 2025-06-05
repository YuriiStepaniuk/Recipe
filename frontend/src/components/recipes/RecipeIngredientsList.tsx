import { Route } from '@/enums/routes.enum';
import Link from 'next/link';

interface RecipeIngredientsListProps {
  ingredients: { ingredient: string; measure: string }[];
}

const RecipeIngredientsList: React.FC<RecipeIngredientsListProps> = ({
  ingredients,
}) => (
  <section>
    <h2 className="text-xl font-semibold mb-2">Ingredients</h2>
    <ul className="list-disc list-inside space-y-1">
      {ingredients.map(({ ingredient, measure }) => (
        <li key={ingredient}>
          <Link
            href={`${
              Route.RECIPE
            }?filterType=ingredients&filterValue=${encodeURIComponent(
              ingredient
            )}`}
            className="text-blue-600 hover:underline"
          >
            {ingredient}
          </Link>
          {measure ? ` - ${measure}` : ''}
        </li>
      ))}
    </ul>
  </section>
);

export default RecipeIngredientsList;
