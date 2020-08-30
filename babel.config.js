module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'module-resolver',
    {
      root: ['./src'],
      extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
      alias: {
        tests: ['./tests/'],
        '@actions': './src/actions',
        '@components': './src/components',
        '@constants': './src/constants',
        '@containers': './src/containers',
      },
    },
  ],
};
