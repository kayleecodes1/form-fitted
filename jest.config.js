const { compilerOptions } = require('./tsconfig.json');
const { pathsToModuleNameMapper } = require('ts-jest/utils');

const paths = pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/',
});

module.exports = {
    moduleFileExtensions: ['js', 'ts', 'tsx'],
    moduleNameMapper: { ...paths },
    roots: ['<rootDir>/src'],
    testRegex: '^.+\\.test\\.tsx?$',
    transform: {
        '^.+\\.tsx?$': 'ts-jest',
    },
};
