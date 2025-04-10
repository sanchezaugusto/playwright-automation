//export const ENV = process.env.TEST_ENV || 'development'; // Default to 'development'
export const ENV = 'production'

export const CONFIG = {
  development: 'https://dev.saucedemo.com/',
  staging: 'https://staging.saucedemo.com/',
  production: 'https://www.saucedemo.com/',
};

export const BASE_URL = CONFIG[ENV]; // Select the URL based on the current environment