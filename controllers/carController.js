import debug from "debug";
import {lowerCase} from 'lodash';

import Car from "../models/carModel";

const log = debug('app:carController');

function carController() {
const getCars = async (req, res) => {
  const query = {};

  if (req.query.brand)  {
    query.brand = req.query.brand
  }
  const page = parseInt(req.query.page) || 1
  const limit = parseInt(req.query.limit) || 10

  const results = {};
  const startIndex = (page - 1) * limit;
  const endIndex = page *  limit;



  if (endIndex < await (Car.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit
    }
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit
    }
  }
 
  try {
    results.results = await Car.find(query).skip(startIndex).limit(limit).exec();
    res.status(200).json(results)
  } catch (err) {
    log(err);
    return res.status(500).json(err)
  }
}
const postCar = async (req, res) => {
   
  const { buffer, originalname, mimetype } = req.file;
  const {brand, model, price, imageUrl, description, year} = req.body;
  const base64Data = buffer.toString('base64');
const newCar = new Car({
brand: lowerCase(brand),model,imageUrl,description,year,price,
imageFile: {
 data: base64Data,
 filename: originalname,
 contentType: mimetype
}
})
try {
await newCar.save();
res.status(201);
res.json(newCar)
} catch (err) {
log(err)
}
  
}

const getCarByIdMiddleware =  async (req, res, next) => {
  const {carId} = req.params;
  try {
    const foundCar = await Car.findById(carId);
    if (!foundCar) {
      res.status(404).json('Not Found!');
    }
    req.car = foundCar;
    next();
  } catch (err) {
    log(err);
    res.status(500).json(err)
  }
}
const getCar = (req, res) => {
  res.status(200).json(req.car);
}
const putCar = async (req, res) => {
  try {
    const {car} = req;
    car.brand = req.body.brand
    car.model = req.body.model;
    car.year = req.body.year;
    car.price = req.body.price;
    car.description = req.body.description;
    car.imageUrl = req.body.imageUrl;
    await car.save()
    return res.status(201).json(car);
  } catch (err) {
    log(err);
    return res.status(500).json(err);
  }
}
const patchCar = async(req, res) => {
  const {body} = req;
  const {car} = req;
  try {
    Object.keys(body).forEach(key => {
      car[key] = body[key]
    })

    await car.save()
    res.status(201).json(car);
  } catch (err) {
    log(err);
    return res.status(500).json(err)
  }
}
const deleteCar = async(req, res) => {
  try {
    await Car.deleteOne({_id: req.params.carId});
    return res.status(204).json({message: 'Car Deleted Successfully.'});
  } catch (err) {
    log(err);
    return res.status(500).json(err);
  }
}
 
  return {
getCars, getCar, postCar, putCar, patchCar, deleteCar,
getCarByIdMiddleware
  }
}


export default carController;