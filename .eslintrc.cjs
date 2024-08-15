const { FlatCompat } = require('@eslint/eslintrc');
const { includeIgnoreFile } = require('@eslint/compat');
const path = require('path');
const fs = require('fs');

const gitignorePath = path.resolve(__dirname, '.gitignore');

let ignoreConfig = [];
if (fs.existsSync(gitignorePath)) {
  const ignoreFileConfig = includeIgnoreFile(gitignorePath);
  ignoreConfig = ignoreFileConfig ? [ignoreFileConfig] : [];
}

const compat = new FlatCompat();

module.exports = [
  ...ignoreConfig,
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('plugin:prettier/recommended'),
  {
    plugins: {
      prettier: require('eslint-plugin-prettier'),
    },
    rules: {
      'prettier/prettier': 'error',
      '@next/next/no-duplicate-head': 'off', // Desabilite temporariamente a regra
    },
  },
];
