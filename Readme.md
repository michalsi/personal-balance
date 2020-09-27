[WIP]

## Unit Tests

Testing Framework: [Jest](Https://jestjs.io/)

Code coverage configured in `jest.config.js` :
``` 
collectCoverage: true,
collectCoverageFrom: ['src/**/*.{js,jsx}'],
coverageDirectory: "coverage",
coverageProvider: "v8",
coverageReporters: ["text","lcov"],
``` 


## GitHub Actions
Github workflow will do a clean install of node dependencies, build the source code and run tests across different versions of node
