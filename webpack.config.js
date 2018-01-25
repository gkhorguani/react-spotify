var path = require('path');

module.exports = {
  entry: {
    main_module: './src/index.js'
  },
  devtool: 'inline-source-map',
  output: {
    path: __dirname,
    filename: 'public/bundles/[name].bundle.js'
  },
  resolve: {
    alias: {
      modules: path.resolve(__dirname, 'src/modules/'),
      config: path.resolve(__dirname, 'src/config/')
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              'babel-preset-es2015',
              'babel-preset-react',
              'babel-preset-stage-0'
            ].map(require.resolve)
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader' // creates style nodes from JS strings
          },
          {
            loader: 'css-loader' // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader' // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader']
      }
    ]
  }
};
