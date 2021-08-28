module.exports = (api) => {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', '@babel/preset-env'],
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-private-methods',
    ],
  };
};
