import Joi from "joi";
import debug from 'debug';

const log = debug('app:userValidator')


const userSchema =  Joi.object({
  username: Joi.string().min(2).required(),
  password: Joi.string().required().min(8),
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'org'] } }).required(),
  mobile: Joi.number().optional(),
  address: Joi.string().optional(),
  role: Joi.string().default('client').optional()
})


const validateUser = async(req, res, next) => {
  try {
    await userSchema.validateAsync(req.body)
  next()
  } catch (err) {
    log(err)
    return res.status(403).json(err)
  }
}

export default validateUser;