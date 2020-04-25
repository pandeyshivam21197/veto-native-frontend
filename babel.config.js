module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  'plugins': [
    ['@babel/plugin-proposal-decorators', { 'legacy': true }],
    ['module-resolver', {
      extensions: ['.tsx','.ts', 'js', '.ios.js', '.android.js', '.json'],
      'alias': {
        '@navigation': './src/navigation',
        '@services': './src/services',
        '@components': './src/components',
        '@modules': './src/modules',
        '@screens': './src/screens',
      },
    }],
  ],
};
