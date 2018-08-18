import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { ServerError } from './views/error';
import express from 'express';
import path from 'path';
import fs from 'fs';
import { StaticRouter } from 'react-router-dom';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackDevMiddleware from 'webpack-dev-middleware';

let App = require('./App').default;

const webpackCompiler = webpack(webpackConfig);
const server = express();
const port = 5280;

/**
 * Developer tools
 */
if (process.env.NODE_ENV === 'development') {
  console.log('Express server is using Webpack development middleware...');

  server.use(webpackDevMiddleware(webpackCompiler, {
    publicPath: webpackConfig.output.publicPath,
    hot: true,
    writeToDisk: true,
  }));

  server.use(webpackHotMiddleware(webpackCompiler));

  webpackCompiler.hooks.done.tap('ServerRestart', () => {
    console.log('Webpack has recompiled, clearing require.cache...');
    Object.keys(require.cache).forEach((key) => {
      if (!key.includes('node_modules')) {
        delete require.cache[key];
      }
    });

    App = require('./App').default;
  });
};

/**
 * Static files
 */
server.use('/static', express.static(path.join(__dirname, '../build/static')));

/**
 * Server-side rendering with router
 */
server.get('*', (req, res) => {
  const staticComponent = ReactDOMServer.renderToString(
    <StaticRouter location={req.url} context={{}}>
      <App />
    </StaticRouter>
  );

  const htmlTemplate = fs.readFileSync(path.join(__dirname, '../build/views/index.html')).toString();
  return res.send(htmlTemplate.replace('<div id="react"></div>', `<div id="react">${staticComponent}</div>`));
});

/**
 * Error handler (this must be last)
 */
server.use((err, req, res, next) => {
  const staticComponent = ReactDOMServer.renderToString(<ServerError error={err} />);
  const htmlTemplate = fs.readFileSync(path.join(__dirname, '../build/views/error.html')).toString();
  return res.send(htmlTemplate.replace('<div id="react"></div>', `<div id="react">${staticComponent}</div>`));
});

const startServer = () => {
  return server.listen(port, () => {
    console.log(`Express server is listening on port ${port}...`);
  });
};

startServer();
