/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testMatch: ["**/tests/**/*.ts"],
  testTimeout: 30000
  
}; 