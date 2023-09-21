import React from 'react';
import {renderToString} from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import {StaticRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import debug from 'debug';
const log = debug('app:renderer')

import routes from '../src/Routes';

function renderer(req, store, context) {

  const content = renderToString(
   <Provider store={store}>
    <StaticRouter location={req.path} context={context}>
    {renderRoutes(routes)}
   </StaticRouter>
   </Provider>
  
  )

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>prestige-autos</title>
  </head>
  <body>
    <div id="root">${content}</div>
  
  
    <script>
      Window.INITIAL_STATE = ${JSON.stringify(store.getState())}
    </script>
    <script src="/bundle.js"></script>
  </body>
  </html>
  
  `;
}

export default renderer;