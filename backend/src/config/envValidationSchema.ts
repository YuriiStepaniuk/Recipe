import * as Joi from 'joi';
import { Environment } from 'src/enums/environment.enum';

export const envValidationSchema = Joi.object({
  PORT: Joi.number().required().default(3000),

  NODE_ENV: Joi.string().required().default(Environment.DEVELOPMENT),

  FRONT_END_URL: Joi.string().required(),

  MEALDB_API_BASE_URL: Joi.string().required(),
});
