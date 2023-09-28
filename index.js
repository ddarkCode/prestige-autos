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
import MongoDBStore from 'connect-mongodb-session';
import cors from 'cors';

import './src/index.css';
import carRoutes from './routes/carRoutes';
import authRoutes from './routes/authRoutes';
import passportConfig from './passportConfig/passport';
import googleRoutes from './routes/googleRoutes';

import routes from './src/Routes';
import renderer from './helpers/renderer';
import createStore from './helpers/createStore';

const { MONGO_URL_LOCAL, SESSION_SECRET, MONGO_CLOUD} = process.env
let PORT = process.env.PORT || 3000
const log = debug('app');
const MongoDBStoreSession = MongoDBStore(session);

const app = express();


(async function connectMongo(){
  try {
    await connect(MONGO_CLOUD);
    log('Mongo Database Connected Successfully!')
  } catch (err) {
    log(err)
  }
}())
app.use(cors());

const allowedOrigins = ['http://localhost:4444', 'https://prestige-autos.onrender.com'];

const store = new MongoDBStoreSession({
    uri: MONGO_CLOUD,
    databaseName: 'prestigeAutosDB',
    collection: 'prestigeAutosDBSessions'
  })


    app.use(
      cors({
        origin: (origin, callback) => {
          
          if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true); 
          } else {
            callback(new Error('Not allowed by CORS')); 
          }
        },
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', 
        allowedHeaders: 'Origin, X-Requested-With, Content-Type, Accept, Authorization', 
        exposedHeaders: 'Content-Length, X-Custom-Header',
      })
    );
    
 

app.use(session({
  store,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24 * 7 
  },
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
app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));



app.use('/api', apiLimiter)
app.use('/auth', googleRoutes())
app.use('/api/cars', carRoutes())
app.use('/api/users', authRoutes());

function reqMiddleware(req, res, next) {
  if (req.originalUrl === '/favicon.ico') {
    res.status(204).end()
  } else {
    next()
  }
}

app.get('*', reqMiddleware,(req, res) => {
  const store = createStore();
  const query = req.originalUrl.split('/').find(u => u.startsWith('?'))
  const carId = req.originalUrl.split('/')[3]

  const matchedRoutes = matchRoutes(routes, req.path);

  const promises = matchedRoutes.map(({route}) => route.loadData ? route.loadData(store, query, carId) : null)
  .filter(prom => prom !== null).map(promise => {
    return new Promise((resolve, reject) => {
      promise.then(resolve).catch(resolve);
    })
  });

Promise.all(promises).then(() => {
  const context = {}
  const html = renderer(req, store, context);
 
  res.send(html);
})


})

app.listen(PORT, () => log(`Server is running on port:${PORT}`));