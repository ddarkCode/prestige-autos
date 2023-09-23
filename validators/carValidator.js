import Joi from 'joi';


const carSchema = Joi.object({
  brand: Joi.string().required().min(2),
  model: Joi.string().required(),
  description: Joi.string().required(),
  year: Joi.string().required(),
  price: Joi.string().required(),
  imageUrl: Joi.string().required().min(20),

})

const carValidator = async (req, res, next) => {
  try {
    await carSchema.validateAsync(req.body);
    next()
  } catch (err) {
    return res.status(403).json(err)
  }
}

export default carValidator;