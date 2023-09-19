import Joi from 'joi';


const carSchema = Joi.object({
  name: Joi.string().required().min(4),
  model: Joi.string().required().min(2),
  year: Joi.number().required(),
  price: Joi.number().required(),
  image_url: Joi.string().required().min(20),

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