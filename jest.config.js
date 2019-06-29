const common = require('./jest.common')

module.exports = {
  projects: [
    {
      ...common,
      displayName: 'main',
      runner: '@jest-runner/electron/main',
      testEnvironment: 'node',
      testMatch: ['**/__tests__/**/*.(spec|test).(ts|js)']
    },
    {
      ...common,
      displayName: 'renderer',
      runner: '@jest-runner/electron',
      setupFilesAfterEnv: [
        '@testing-library/react/cleanup-after-each',
      ],
      testEnvironment: '@jest-runner/electron/environment',
      testMatch: ['**/__tests__/**/*.(spec|test).(tsx|jsx)']
    }
  ]
}