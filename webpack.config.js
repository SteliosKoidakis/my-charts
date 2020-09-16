const path = require('path');

module.exports = {
  entry: {
    bundle: `${__dirname}/src/index.js`,
    components: `${__dirname}/src/components/index.js`,
  },
  output: {
    path: `${__dirname}/dist`,
    publicPath: '/dist/',
    filename: '[name].js',
  },
  resolve: {
    alias: {
      '~': path.resolve(__dirname, 'src/'),
    },
    extensions: ['.js'],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
};
