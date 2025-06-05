export const extractIngredients = (recipe: any) => {
  const result = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = recipe[`strIngredient${i}`];
    const measure = recipe[`strMeasure${i}`];
    if (ingredient && ingredient.trim() !== '') {
      result.push({ ingredient, measure });
    }
  }
  return result;
};
