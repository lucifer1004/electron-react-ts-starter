const common = {
  preset: 'ts-jest',
  globals: {
    'ts-jest': {
      babelConfig: true,
    }
  },
  "transform": {
    ".+\\.(css|styl|stylus|less|sass|scss)$": "jest-transform-css",
    ".+\\.(gql|graphql)$": "jest-transform-graphql",
  },
  "moduleNameMapper":{
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/mocks/fileMock.js",
  }
}

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