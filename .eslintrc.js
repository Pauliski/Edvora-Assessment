module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: ['next', 'prettier'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        },
        ecmaVersion: 12,
        sourceType: 'module'
    },
    plugins: ['@typescript-eslint'],
    rules: {
        '@next/next/no-document-import-in-page': 'off',
        'one-var': 0,
        'one-var-declaration-per-line': 0,
        'new-cap': 0,
        'consistent-return': 0,
        'max-len': [1, 120],
        'no-param-reassign': 0,
        'comma-dangle': 0,
        curly: ['error', 'multi-line'],
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
        'react/jsx-props-no-spreading': [
            0,
            {
                html: 'ignore' | 'enforce',
                custom: 'ignore' | 'enforce',
                explicitSpread: 'ignore' | 'enforce'
            }
        ]
    }
};
