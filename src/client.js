import React from "react";
import {hydrateRoot} from 'react-dom/client';
import { renderRoutes } from "react-router-config";
import {BrowserRouter} from 'react-router-dom'

import './index.css';

import routes from "./Routes";


hydrateRoot(document.getElementById('root'),
<BrowserRouter>
  {renderRoutes(routes)}
</BrowserRouter>

);
