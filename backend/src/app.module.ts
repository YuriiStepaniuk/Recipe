import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { envValidationSchema } from './config/envValidationSchema';
import { RecipeModule } from './recipes/recipe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      validationSchema: envValidationSchema,
    }),
    RecipeModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
