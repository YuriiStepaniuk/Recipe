import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import { ConfigType } from 'src/config/configuration';
import { RecipeFilterDto } from '../dtos/recipe-filter';
import { Recipe } from '../types/recipe.type';
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

  async findAll(filter?: RecipeFilterDto): Promise<Recipe[]> {
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

  private buildQuery(filter?: RecipeFilterDto): string {
    if (filter?.ingredient) return `filter.php?i=${filter.ingredient}`;
    if (filter?.area) return `filter.php?a=${filter.area}`;
    if (filter?.category) return `filter.php?c=${filter.category}`;
    return 'search.php?s=';
  }
}
