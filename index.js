import {config} from 'dotenv';
config();

import express from 'express';
import morgan from 'morgan';
import {connect} from 'mongoose';
import React from 'react';
import debug from 'debug';
import session from 'express-session';
import { rateLimit } from 'express-rate-limit'
import {renderToString} from 'react-dom/server';
import ejs from 'ejs';

import './src/index.css';
import carRoutes from './routes/carRoutes';
import authRoutes from './routes/authRoutes';
import passportConfig from './passportConfig/passport';

import Routes from './src/Routes';
import App from './src/pages/App';
import renderer from './helpers/renderer';

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

  const content = renderer(req);
 
  res.render('index', {content});
})

app.listen(PORT, () => log(`Server is running on port:${PORT}`));