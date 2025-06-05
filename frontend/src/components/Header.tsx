import { Route } from '@/enums/routes.enum';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold hover:text-blue-300">
          My Recipe App
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href={Route.ROOT} className="hover:text-blue-300">
                Home
              </Link>
            </li>
            <li>
              <Link href={Route.RECIPE} className="hover:text-blue-300">
                Recipes
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
