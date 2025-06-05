import { IsEnum, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { FilterTypeEnum } from '../enums/filter-type.enum';

export class RecipeFilterDto {
  @IsEnum(FilterTypeEnum)
  filterType: FilterTypeEnum;

  @IsString()
  @IsNotEmpty()
  filterValue: string;
}
