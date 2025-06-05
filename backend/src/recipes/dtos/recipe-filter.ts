import { IsOptional, IsString } from 'class-validator';

export class RecipeFilterDto {
  @IsOptional()
  @IsString()
  ingredient?: string;

  @IsOptional()
  @IsString()
  area?: string;

  @IsOptional()
  @IsString()
  category?: string;
}
