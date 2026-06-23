import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env') });

export const env = {
  baseURL: process.env.BASE_URL ?? 'https://demowebshop.tricentis.com/',
  browser: process.env.BROWSER ?? 'chromium',
  headless: process.env.HEADLESS !== 'false',
  username: process.env.USERNAME ?? '',
  password: process.env.PASSWORD ?? ''
};
