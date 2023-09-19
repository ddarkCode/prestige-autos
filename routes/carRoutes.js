import {Router} from 'express';
import debug from 'debug';

import Car from '../models/carModel';
import carController from '../controllers/carController';

import carValidator from '../validators/carValidator';

const log = debug('app:carRouter');

function carRoutes() {
  const carRouter = Router();
  const {getCars, getCar, postCar, putCar, patchCar, deleteCar} = carController()

  carRouter.route('/')
  .get(getCars )
  .post(carValidator, postCar)
  carRouter.route('/:carId')
  .all( async (req, res, next) => {
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
  })
  .get(getCar)
  .put(putCar)
  .patch(patchCar)
  .delete(deleteCar)
  return carRouter;
}

export default carRoutes;