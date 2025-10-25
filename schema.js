const Joi = require("joi");

// Listing Schema
module.exports.listingSchema = Joi.object({
  listing: Joi.object({
    title: Joi.string().required().messages({
      "string.empty": "Title is required.",
    }),
    description: Joi.string().required().messages({
      "string.empty": "Description is required.",
    }),
    location: Joi.string().required().messages({
      "string.empty": "Location is required.",
    }),
    country: Joi.string().required().messages({
      "string.empty": "Country is required.",
    }),
    price: Joi.number().min(0).required().messages({
      "number.base": "Price must be a number.",
      "number.min": "Price cannot be negative.",
      "any.required": "Price is required.",
    }),
    image: Joi.string().allow("", null),
  }).required(),
});

// Review Schema
module.exports.reviewSchema = Joi.object({
  review: Joi.object({
    rating: Joi.number().min(1).max(5).required().messages({
      "number.base": "Rating must be a number between 1 and 5.",
      "number.min": "Rating must be at least 1.",
      "number.max": "Rating cannot exceed 5.",
      "any.required": "Rating is required.",
    }),
    comment: Joi.string().required().messages({
      "string.empty": "Comment is required.",
    }),
  }).required(),
});
