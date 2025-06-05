import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4">
      <h1 className="text-4xl font-bold mb-4 text-center text-gray-800">
        Welcome to My Recipe App
      </h1>
      <p className="text-lg text-gray-600 mb-8 text-center max-w-xl">
        Discover delicious recipes from around the world. Use filters to find
        recipes by ingredient, country, or category.
      </p>
      <Link
        href="/recipes"
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-md shadow-md transition"
      >
        Browse Recipes
      </Link>
    </div>
  );
}
