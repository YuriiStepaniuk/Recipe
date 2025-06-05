const configuration = () => ({
  port: parseInt(process.env.PORT || '3000'),

  env: process.env.NODE_ENV,

  mealApiUrl: process.env.MEALDB_API_BASE_URL,
});

export default configuration;
export type ConfigType = ReturnType<typeof configuration>;
