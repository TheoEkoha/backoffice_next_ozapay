const path = require('path');

module.exports = {
  entry: './src/app/[lang]/layout.js', // Point d'entrée
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Alias pour src
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'], // Extensions à résoudre
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  mode: 'development', // Mode de développement
};