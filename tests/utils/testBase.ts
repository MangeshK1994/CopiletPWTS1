import { test as baseTest } from '@playwright/test';
import { env } from './env';

export const test = baseTest.extend({
  baseURL: env.baseURL
});
export const expect = test.expect;
