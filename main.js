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
        'plugin:@typescript-eslint/recommended',
        'nerit-lint-api'
    ],

    rules: {

        'quotes': [
            'error',
            'single'
        ],

		"@typescript-eslint/naming-convention": [
			"error",

			// Enforce camelCase for all variables, functions, and properties
			{ "selector": "variableLike", "format": ["camelCase"] },

			// Enforce private members to be prefixed with an underscore
			{
				"selector": "memberLike",
				"modifiers": ["private"],
				"format": ["camelCase"],
				"leadingUnderscore": "require"
			},

			// Enforce boolean variables to be prefixed with an allowed verb
			{
				"selector": "variable",
				"types": ["boolean"],
				"format": ["PascalCase"],
				"prefix": ["is", "should", "has", "can", "did", "will"]
			},

			// Enforce variables to be in camelCase or UPPER_CASE
			{
				"selector": "variable",
				"format": ["camelCase", "UPPER_CASE"]
			},

			// Enforce const variables to be in UPPER_CASE
			{
				"selector": "variable",
				"modifiers": ["const"],
				"format": ["UPPER_CASE"]
			},

			// Enforce type parameters (generics) to be prefixed with T
			{
				"selector": "typeParameter",
				"format": ["PascalCase"],
				"prefix": ["T"]
			},

			// Enforce interface names not to begin with an I
			{
				"selector": "interface",
				"format": ["PascalCase"],
				"custom": {
					"regex": "^I[A-Z]",
					"match": false
				}
			},

			// Enforce variable and function names to be in camelCase
			{
				"selector": ["variable", "function"],
				"format": ["camelCase"],
				"leadingUnderscore": "allow"
			}

		],

		// Disallow unused variables
		'@typescript-eslint/no-unused-vars': [
			'error',
			{
				vars: 'all',
				args: 'after-used',
				ignoreRestSiblings: false
			}
		],

		// Require const declarations for variables that are never reassigned after declared
		'prefer-const': 'error',

		// Disallow duplicate module imports
		'no-duplicate-imports': 'error',

		// Enforce the use of single quotes
		'quotes': [
			'error',
			'single'
		],

		// Require comma spacing after comma
		'comma-spacing': ['error', { 'before': false, 'after': true }],

		// Require strict equality
		'eqeqeq': ['error', 'always'],

		// Disallow the use of the 'any' type
		'@typescript-eslint/no-explicit-any': 'error',

		// Disallow multiple consecutive spaces
		'no-trailing-spaces': ['error', { 'ignoreComments': true }],

		// Disallow unnecessary else after return
		'no-else-return': 'error',

		// Import a specific style for multiline comments
		'multiline-comment-style': ['error', 'starred-block']


    }
}
