import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import reducers from '../src/redux';

export default () => {
  return createStore(reducers, {}, applyMiddleware(thunk))
}