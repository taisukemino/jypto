const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    mode: 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            compact: true,
            presets: ['react', 'es2015', 'stage-1']
          }
        }, {
          test: /\.svg$/,
          loader: 'babel-loader!svg-react-loader'
        }, {
          test: /\.(jpg|png)$/,
          loader: 'url-loader'
        }, {
          test: /\.json$/,
          loader: 'json-loader'
        }, {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules'
        }, {
          test: /\.scss$/,
          loader: 'sass-loader!css-loader'
        }

      ]
    },
    resolve: {
      extensions: ['*', '.js', '.jsx', '.json']
    },
    devServer: {
      historyApiFallback: true,
      contentBase: './'
    }
  }, {
    mode: 'production',
    entry: './style/style.scss',
    watch: true,
    output: {
      path: __dirname + '/dist/',
      filename: 'style.css'
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: ExtractTextPlugin.extract({
            use: [
              {
                loader: 'css-loader'
              }, {
                loader: 'sass-loader'
              }
            ],
            fallback: 'style-loader'
          })
        }
      ]
    },
    plugins: [new ExtractTextPlugin('style.css')]
  }
];
