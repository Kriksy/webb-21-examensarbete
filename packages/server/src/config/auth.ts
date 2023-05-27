const JWT_SECRET: string = process.env.JWT_TOKEN || "your_jwt_secret";
const JWT_REFRESH_TOKEN_SECRET: string =
  process.env.JWT_REFRESH_TOKEN_SECRET || "your_jwt_refresh_token_secret";

export const authConfig = {
  secret: JWT_SECRET,
  tokenLife: 9000,
  refreshTokenLife: 86400,
};
