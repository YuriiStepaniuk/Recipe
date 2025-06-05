import { Module } from '@nestjs/common';
import { RecipeService } from './services/recipe.service';
import { RecipeController } from './controllers/recipe.controller';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  exports: [],
  providers: [RecipeService],
  controllers: [RecipeController],
})
export class RecipeModule {}
