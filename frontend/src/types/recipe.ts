export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
  strArea: string;
  strCategory: string;
  strInstructions: string;
  [key: string]: any;
};

export interface RecipeQueryParams {
  ingredient?: string;
  category?: string;
  area?: string;
}

export type RecipeFilter = {
  filterType: 'ingredients' | 'area' | 'category';
  filterValue: string;
};
