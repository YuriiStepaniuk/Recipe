'use client';

import { RecipeFilter } from '@/types/recipe';
import { ChangeEvent, useState } from 'react';

interface RecipeSelectFilterProps {
  onApplyFilter: (filter: RecipeFilter) => void;
}

const RecipeSelectFilter: React.FC<RecipeSelectFilterProps> = ({
  onApplyFilter,
}) => {
  const [filterType, setFilterType] = useState<RecipeFilter['filterType'] | ''>(
    ''
  );
  const [filterValue, setFilterValue] = useState<string>('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleApply = () => {
    if (!filterValue.trim() || filterType === '') return;
    onApplyFilter({ filterType, filterValue: filterValue.trim() });
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
        onClick={handleApply}
      >
        Confirm
      </button>
    </div>
  );
};

export default RecipeSelectFilter;
