module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 2 versions', 'not ie <= 11'],
        },
      },
    ],
  ],
  plugins: ['@babel/plugin-syntax-dynamic-import'],
}
