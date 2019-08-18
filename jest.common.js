module.exports = {
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
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
  }
}