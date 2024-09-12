import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, `.env.${process.env.NODE_ENV || 'dev'}`) });

console.log(process.env.NODE_ENV || 'dev');

export const config = {
  nodeEnv: process.env.NODE_ENV || 'dev',
  port: process.env.PORT || 3000,
  dbConfig: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  apiUrl: process.env.API_URL,
  secretKey: process.env.SECRET_KEY,
};