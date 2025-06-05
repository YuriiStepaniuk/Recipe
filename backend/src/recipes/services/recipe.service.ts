import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from 'src/config/configuration';
import { Recipe, RecipeFilter } from '../types/recipe.type';
import { firstValueFrom } from 'rxjs';

@Injectable()
export class RecipeService {
  private readonly apiBaseUrl: string;

  constructor(
    private readonly http: HttpService,
    private readonly configService: ConfigService<ConfigType>,
  ) {
    this.apiBaseUrl = configService.get('mealApiUrl')!;
  }

  async findAll(filter?: RecipeFilter): Promise<Recipe[]> {
    const query = this.buildQuery(filter);
    const url = `${this.apiBaseUrl}/${query}`;
    const response = await firstValueFrom(this.http.get(url));
    return response.data.meals || [];
  }

  async findOne(id): Promise<Recipe | null> {
    const url = `${this.apiBaseUrl}/lookup.php?i=${id}`;
    const response = await firstValueFrom(this.http.get(url));
    return response.data.meals ? response.data.meals[0] : null;
  }

  private buildQuery(filter?: RecipeFilter): string {
    if (filter?.filterType === 'ingredients')
      return `filter.php?i=${encodeURIComponent(filter.filterValue)}`;
    if (filter?.filterType === 'area')
      return `filter.php?a=${encodeURIComponent(filter.filterValue)}`;
    if (filter?.filterType === 'category')
      return `filter.php?c=${encodeURIComponent(filter.filterValue)}`;
    return 'search.php?s=';
  }
}
