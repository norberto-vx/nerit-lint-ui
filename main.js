module.exports = {
    root: true,
    parserOptions: {
        project: '../../tsconfig.json',
        tsconfigRootDir: __dirname,
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'eslint-plugin-import-helpers'      
    ],
    extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended' ,
        'nerit-lint-api'     
    ]

}