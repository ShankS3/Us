module.exports = {
  root: true,
  extends: [
    '@react-native-community',
    'airbnb-typescript',
    'prettier',
    'prettier/@typescript-eslint',
    'prettier/react',
  ],
  plugins: ['@typescript-eslint', 'react'],
  parser: '@typescript-eslint/parser',
  rules: {
    "import/no-unresolved": 0,
    "react/jsx-filename-extension": [1, {
      "extensions": [".jsx", ".tsx", ".js", ".ts"]
    }]
  }
};
