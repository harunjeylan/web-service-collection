export const jwtConstants = {
  accessSecretKey: process.env.JWT_ACCESS_SECRETE_KEY,
  refreshSecretKey: process.env.JWT_REFRESH_SECRETE_KEY,
  accessTokenLifetime: process.env.JWT_ACCESS_LIFETIME,
  refreshTokenLifetime: process.env.JWT_REFRESH_LIFETIME,
};
