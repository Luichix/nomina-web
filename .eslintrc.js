const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error',
}
module.exports = {
  settings: {
    createClass: 'createReactClass',
    pragma: 'React',
    react: {
      version: 'detect',
    },
    flowVersion: '0.53',
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
      },
    },
  },
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
    requireConfigFile: false,
  },
  plugins: ['react'],
  rules: {
    'react/prop-types': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    eqeqeq: 'error',
    'no-trailing-spaces': 'error',
    'object-curly-spacing': ['error', 'always'],
    'arrow-spacing': ['error', { before: true, after: true }],
    'no-console': 0,
  },
}
