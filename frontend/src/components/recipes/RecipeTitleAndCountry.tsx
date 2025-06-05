import { Route } from '@/enums/routes.enum';
import Link from 'next/link';

interface RecipyTitleAndCountry {
  title: string;
  country: string;
}

const RecipeTitleAndCountry: React.FC<RecipyTitleAndCountry> = ({
  title,
  country,
}) => (
  <>
    <h1 className="text-3xl font-bold text-center md:text-left">{title}</h1>
    <div className="text-center md:text-left">
      Country:{' '}
      <Link
        href={`${Route.RECIPE}?filterType=area&filterValue=${encodeURIComponent(
          country
        )}`}
        className="text-blue-600 hover:underline"
      >
        {country}
      </Link>
    </div>
  </>
);

export default RecipeTitleAndCountry;
