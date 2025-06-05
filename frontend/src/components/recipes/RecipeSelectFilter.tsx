'use client';

import { Route } from '@/enums/routes.enum';
import { RecipeFilter } from '@/types/recipe';
import { useSearchParams, useRouter } from 'next/navigation';
import { ChangeEvent, useState } from 'react';

const RecipeSelectFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [filterType, setFilterType] = useState<RecipeFilter['filterType'] | ''>(
    ''
  );
  const [filterValue, setFilterValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const params = new URLSearchParams(searchParams.toString());

    if (filterValue.trim()) {
      params.set('filterType', filterType);
      params.set('filterValue', filterValue.trim());
    } else {
      params.delete('filterType');
      params.delete('filterValue');
    }

    router.push(`${Route.RECIPE}?${params.toString()}`);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white rounded shadow space-y-4">
      <div className="flex items-center space-x-4">
        <select
          className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={filterType}
          onChange={(e) =>
            setFilterType(e.target.value as RecipeFilter['filterType'])
          }
        >
          <option value="" disabled hidden>
            Select filter type...
          </option>
          <option value="ingredients">Ingredients</option>
          <option value="area">Area</option>
          <option value="category">Category</option>
        </select>
        <div className="flex-grow">
          <label htmlFor="filterInput" className="sr-only">
            Search Value
          </label>
          <input
            id="filterInput"
            type="text"
            placeholder="Enter search value"
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>
      <button
        className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition cursor-pointer"
        disabled={!filterValue.trim()}
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
};

export default RecipeSelectFilter;
