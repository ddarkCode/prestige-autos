import {Router} from 'express';
import debug from 'debug';
import multer from 'multer';

const storage = multer.memoryStorage()
const uploads = multer({storage})


import carController from '../controllers/carController';
import carValidator from '../validators/carValidator';

const log = debug('app:carRouter');
 
function carRoutes() {
  const carRouter = Router();
  const {getCars, getCar, postCar, putCar, patchCar, deleteCar, getCarByIdMiddleware} = carController()
  carRouter.route('/')
  .get(getCars )
  .post(carValidator,uploads.single('imageFile'),postCar)
  carRouter.route('/:carId')
  .all(getCarByIdMiddleware)
  .get(getCar)
  .put(putCar)
  .patch(patchCar)
  .delete(deleteCar)
  return carRouter;
}

export default carRoutes;