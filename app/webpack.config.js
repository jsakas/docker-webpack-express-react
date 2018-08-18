const path = require('path');
const ExtractCssChunks = require('extract-css-chunks-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { HotModuleReplacementPlugin } = require('webpack');

/**
 * Environment
 */
const env = process.env.NODE_ENV || 'production';
console.log(`Webpack is running under ${env}...`);

/**
 * Static asset format
 */
const fileNamingPattern = '[name]';

/**
 * Returns a newly configured HtmlWebpackPlugin
 *
 * @param {String} outfile - Output file name, relative to build directory
 * @param {String} template - Path to template file
 * @param {Array<string>} chunks - Array of webpack chunk names
 *
 * @returns {HtmlWebpackPlugin}
 */
const htmlTemplateFactory = (outfile, template, chunks) => {
  return new HtmlWebpackPlugin({
    filename: `../${outfile}`,
    template: path.join(__dirname, template),
    chunks: [...chunks],
    body: [...chunks],
    inject: false,
  });
};

/**
 * Convert values to Boolean type. To be used in Array.filter()
 */
const falsy = i => Boolean(i);

/**
 * Creates an entrypoint that is configured with hot reloading
 *
 * @param {String} chunk name
 * @param {String} file path
 */
const entrypointFactory = (chunk, filepath) => {
  return {
    [chunk]: [
      env === 'development' && 'webpack-hot-middleware/client?reload=true',
      filepath,
    ].filter(falsy),
  };
};

/**
 * Webpack Configuration
 * https://webpack.js.org/configuration/
 */
module.exports = {
  mode: env,
  entry: {
    ...entrypointFactory('client', path.resolve(__dirname, 'src/client')),
  },
  output: {
    path: path.resolve(__dirname, 'build/static'),
    publicPath: '/static/',
    filename: `${fileNamingPattern}.js`,
  },
  plugins: [
    htmlTemplateFactory('views/index.html', 'src/html/template.html', ['client']),
    htmlTemplateFactory('views/error.html', 'src/html/template.html', ['client']),
    new ExtractCssChunks({
      filename: `${fileNamingPattern}.css`,
    }),
    env === 'development' && new HotModuleReplacementPlugin(),
  ].filter(falsy),
  resolve: {
    alias: {
      server: path.resolve(__dirname, 'server.js'),
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['react', 'env'],
              plugins: [
                'transform-class-properties',
                'transform-object-rest-spread',
                'react-hot-loader/babel',
              ],
            },
          },
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: ExtractCssChunks.loader,
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: true,
              includePaths: [
                './node_modules/',
              ],
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${fileNamingPattern}.[ext]`,
            },
          },
        ],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: `${fileNamingPattern}.[ext]`,
            },
          },
        ],
      },
    ],
  },
};
