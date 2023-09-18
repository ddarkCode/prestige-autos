import {config} from 'dotenv';
config();

import express from 'express';
import morgan from 'morgan';
import {connect} from 'mongoose';
import React from 'react';
import debug from 'debug';

import carRoutes from './routes/carRouter';

const {PORT, MONGO_URL_LOCAL} = process.env
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

app.use(express.static('public'));
app.use(express.json())
app.use(express.urlencoded({extended: true}));
app.use(morgan('combined'));

app.use('/api/cars', carRoutes())

app.get('/', (req, res) => {
  res.send('Hello Prestige Vehicles');
})

app.listen(PORT, () => log(`Server is running on port:${PORT}`));