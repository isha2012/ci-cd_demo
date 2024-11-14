// jest.config.js
module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    moduleFileExtensions: ['js', 'ts'],
    transform: {
      '^.+\\.ts$': 'ts-jest'
    },
    testMatch: ['**/tests/**/*.test.ts'], // Adjust this if your test files are in a different location
  };
  