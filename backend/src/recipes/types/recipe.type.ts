export type Recipe = {
  idMeal: string;
  strMeal: string;
  strMealThumb: string;
};

export type RecipeDetails = {
  idMeal: string;
  strMeal: string;
  strCategory: string;
  strArea: string;
  strInstructions: string;
  strMealThumb: string;
  strTags?: string;
  strYoutube?: string;
  [key: string]: any;
};

export type RecipeFilter = 'ingredients' | 'area' | 'category';
