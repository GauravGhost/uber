const Joi = require('joi');

const feedback = {
    body: Joi.object().keys({
        bookingId: Joi.string().required(),
        rating: Joi.number().required(),
        feedback: Joi.string().optional(),
    })
}