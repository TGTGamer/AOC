module.exports = {
  clearMocks: true,
  moduleFileExtensions: ['js', 'ts', 'd.ts'],
  testEnvironment: 'node',
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.ts$': 'ts-jest'
  },
  verbose: true
}
