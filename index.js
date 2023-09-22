import {config} from 'dotenv';
config();

global.window = {};

import express from 'express';
import morgan from 'morgan';
import {connect} from 'mongoose';
import React from 'react';
import debug from 'debug';
import session from 'express-session';
import { rateLimit } from 'express-rate-limit'
import { matchRoutes } from 'react-router-config';
import ejs from 'ejs';

import './src/index.css';
import carRoutes from './routes/carRoutes';
import authRoutes from './routes/authRoutes';
import passportConfig from './passportConfig/passport';

import routes from './src/Routes';
import App from './src/pages/App';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const {PORT, MONGO_URL_LOCAL, SESSION_SECRET} = process.env
const log = debug('app');

const app = express();

(async function connectMongo(){
  try {
    await connect(MONGO_URL_LOCAL);
    log('Mongo Database Connected Successfully!')
  } catch (err) {
    log(err)
  }
}())

app.set('view engine', 'ejs')

app.use(session({
  secret: SESSION_SECRET,
  saveUninitialized: false,
  resave: true
}));

passportConfig(app);

const apiLimiter = rateLimit({
	windowMs: 15 * 60 * 1000,
	limit: 100, 
	standardHeaders: 'draft-7', 
	legacyHeaders: false, 
})

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));

app.use('/api', apiLimiter)
app.use('/api/cars', carRoutes())
app.use('/api/users', authRoutes());




app.get('*', (req, res) => {
  const store = createStore()

  const matchedRoutes = matchRoutes(routes, req.path);
  const promises = matchedRoutes.map(({route}) => route.loadData ? route.loadData(store) : null)
  .filter(prom => prom !== null).map(promise => {
    return new Promise((resolve, reject) => {
      promise.then(resolve).catch(resolve);
    })
  });
  // log(promises);
Promise.all(promises).then(() => {
  const context = {}
  const html = renderer(req, store, context);
 
  res.send(html);
})


})

app.listen(PORT, () => log(`Server is running on port:${PORT}`));