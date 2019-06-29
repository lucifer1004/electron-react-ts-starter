const common = require('./jest.common')

module.exports = {
  projects: [
    {
      ...common,
      displayName: 'e2e',
      testMatch: ['**/e2e/**/*.(spec|test).(ts|js)']
    },
  ]
}