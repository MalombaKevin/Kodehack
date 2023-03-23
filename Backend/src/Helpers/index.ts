import Joi from "joi";

export const questionSchema=Joi.object({

title:Joi.string().required().messages({
    'string.empty':'Title cannot be empty'
}),
category:Joi.string().required().messages({
    'string.empty':'Category cannot be empty'
}),

question:Joi.string().required().messages({

    'string.empty':'Question cannot be empty'
}),

// userId:Joi.string().required().messages({
//     'string.empty':'User Id cannot be empty'
// }),
 

}) 



export const authSchema=Joi.object({

    username:Joi.string().required().messages({
        'string.empty':'username cannot be empty'
    }),

    email:Joi.string().email().required().messages({
        'string.empty':'Email cannot be empty',
        'string.email':'Enter a valid email'
    }),


    password:Joi.string().required().messages({
        'string.empty':'Password cannot be empty',
    })
    

})


export const loginSchema=Joi.object({

    email:Joi.string().email().required().messages({
        'string.empty':'Email cannot be empty',
        'string.email':'Enter a valid email'
    }),


    password:Joi.string().required().messages({
        'string.empty':'Password cannot be empty',
    })
    

})