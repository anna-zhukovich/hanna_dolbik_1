/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleFileExtensions: [
    "js",
    "ts"
  ],
  testMatch: ["**/uitests.ts/**/tests.ts"],
  testTimeout: 30000
  
}; 