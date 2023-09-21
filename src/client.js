import React from "react";
import {hydrateRoot} from 'react-dom/client';
import { renderRoutes } from "react-router-config";
import {BrowserRouter} from 'react-router-dom';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import logger from "redux-logger";
import thunk from "redux-thunk";

import './index.css';

import routes from "./Routes";
import reducers from "./redux";

const store = createStore(reducers, Window.INITIAL_STATE, applyMiddleware(thunk, logger));


hydrateRoot(document.getElementById('root'),
<Provider store={store}>
<BrowserRouter>
  {renderRoutes(routes)}
</BrowserRouter>
</Provider>

);
