module.exports = {
  clearMocks: true,
  setupFiles: [
    '<rootDir>/test/setup.js',
  ],
  'modulePaths': [
    '<rootDir>',
  ],
  'collectCoverageFrom': [
    '<rootDir>/src/**/*.js',
  ],
  'coveragePathIgnorePatterns': [
    'index.js',
    'client.js',
    'server.js',
  ],
  'transform': {
    '^.+\\.js$': 'babel-jest',
  },
  'coverageThreshold': {
    'global': {
      'branches': 80,
      'functions': 80,
      'lines': 80,
      'statements': 80,
    },
  },
};
