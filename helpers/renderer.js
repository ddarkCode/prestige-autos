import React from 'react';
import {renderToString} from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import {StaticRouter} from 'react-router-dom'

import App from '../src/pages/App';
import routes from '../src/Routes';
import HomePage from '../src/pages/HomePage';
 

function renderer(req) {

  const content = renderToString(
   <StaticRouter location={req.path}>
    {renderRoutes(routes)}
   </StaticRouter>
  
  )

  return content;
}

export default renderer;