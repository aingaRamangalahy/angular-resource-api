const GET = (param: string): string => {
  return process.env[param];
};

export const APP_PORT = GET('APP_PORT');
export const BODY_PARSER_LIMIT = GET('BODY_PARSER_LIMIT');
export const DIST_PATH = GET('DIST_PATH');
export const BO_PATH = GET('BO_PATH');
export const JWT_HASH_KEY = GET('JWT_HASH_KEY');

export const DB_HOST = GET('DB_HOST');
export const DB_PORT = GET('DB_PORT');
export const DB_NAME = GET('DB_NAME');
export const DB_PASSWORD = GET('DB_PASSWORD');
export const DB_USER = GET('DB_USER');
export const BASE_FO_URL = GET('BASE_FO_URL');
export const BASE_BO_URL = GET('BASE_BO_URL');
export const ENV = GET('ENV');

export const SMTP_HOST = GET('SMTP_HOST');
export const SMTP_PORT = GET('SMTP_PORT');
export const SMTP_USER = GET('SMTP_USER');
export const SMTP_PASS = GET('SMTP_PASS');

export const EMAIL_FROM = GET('EMAIL_FROM');
export const GOOGLE_OAUTH_CLIENT_ID = GET('GOOGLE_OAUTH_CLIENT_ID');
export const GOOGLE_OAUTH_CLIENT_SECRET = GET('GOOGLE_OAUTH_CLIENT_SECRET');

let AUTH_DB = '';
if (DB_USER) {
  AUTH_DB += DB_USER;
}
if (DB_PASSWORD) {
  AUTH_DB += `:${DB_PASSWORD}@`;
}

export const MONGODB_URI = `mongodb://${AUTH_DB}${DB_HOST}${
  DB_PORT ? ':' + DB_PORT : ''
}/${DB_NAME}`;
