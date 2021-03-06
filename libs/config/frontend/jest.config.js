module.exports = {
    name: 'config-frontend',
    preset: '../../../jest.config.js',
    coverageDirectory: '../../../coverage/libs/config/frontend',
    snapshotSerializers: [
        'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
        'jest-preset-angular/build/AngularSnapshotSerializer.js',
        'jest-preset-angular/build/HTMLCommentSerializer.js',
    ],
    setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
    globals: {
        'ts-jest': {
            tsConfig: '<rootDir>/tsconfig.spec.json',
            stringifyContentPathRegex: '\\.(html|svg)$',
            astTransformers: [
                'jest-preset-angular/build/InlineFilesTransformer',
                'jest-preset-angular/build/StripStylesTransformer',
            ],
        },
    },
};
