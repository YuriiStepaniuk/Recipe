import { Route } from '@/enums/routes.enum';
import Link from 'next/link';

interface RecipeCardProps {
  idMeal: string;
  strMealThumb: string;
  strMeal: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({
  idMeal,
  strMealThumb,
  strMeal,
}) => {
  return (
    <Link
      key={idMeal}
      href={`${Route.RECIPE}/${idMeal}`}
      className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition"
    >
      <img
        src={strMealThumb}
        alt={strMeal}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{strMeal}</h3>
      </div>
    </Link>
  );
};

export default RecipeCard;
