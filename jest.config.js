const { jestConfig } = require('lwc-services/lib/config/jestConfig');

module.exports = {
  ...jestConfig,
  modulePaths: ['./src'],
  collectCoverage: true,
  collectCoverageFrom: ['./src/**/*.{js,ts}', '!./src/**/__stories__/**'],
  coverageThreshold: {
    global: {
      lines: 100
    }
  }
};
