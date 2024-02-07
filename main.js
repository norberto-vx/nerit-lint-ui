module.exports = {
    root: true,
    parserOptions: {
        project: '../../tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    parser: '@typescript-eslint/parser',
    settings: {
        react: {
            version: 'detect',
        },
    },
    env: {
        'node': true,
    },
    plugins: [
        '@typescript-eslint/eslint-plugin',
        'react'
    ],
    extends: [
        'eslint:recommended'
    ],

    rules: {

        // Permite apenas console info 
        'no-console': ['warn', { 'allow': ['info'] }],

    }
}
