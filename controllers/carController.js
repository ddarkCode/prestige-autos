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

  try {
    const cars = await Car.find(query);
    res.status(200).json(cars)
  } catch (err) {
    log(err);
    return res.status(500).json(err)
  }
}
const postCar = async(req, res) => {
  const {brand, model, price, year, description, imageUrl} = req.body
  const car = {
    brand: lowerCase(brand), model, price, year, description, imageUrl
  }
  try {
    const newCar = new Car(car);
    await newCar.save();
    res.status(201).json(newCar);
  } catch (err) {
    log(err);
    res.status(500).json(err)
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
    await Car.findOneAndReplace({_id: req.params.carId}, req.body);
    const updatedCar = await Car.findById(req.params.carId);
    return res.status(201).json(updatedCar);
  } catch (err) {
    log(err);
    return res.status(500).json(err);
  }
}
const patchCar = async(req, res) => {
  let {carId} = req.params;
  try {
    await Car.findByIdAndUpdate(carId, req.body);
    const updatedCar = await Car.findOne({_id: carId});
    res.status(201).json(updatedCar);
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