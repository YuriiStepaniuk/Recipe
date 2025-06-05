import { Controller, Get, Param, Query } from '@nestjs/common';
import { Recipe } from '../types/recipe.type';
import { RecipeService } from '../services/recipe.service';
import { RecipeFilterDto } from '../dtos/recipe-filter';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async getRecipes(@Query() filter: RecipeFilterDto): Promise<Recipe[]> {
    return this.recipeService.findAll(filter);
  }

  @Get(':id')
  async getRecipe(@Param('id') id: string): Promise<Recipe | null> {
    return this.recipeService.findOne(id);
  }
}
