const { validationResult } = require('express-validator');

const validate = (validationRules) => {
    return async (req, res, next) => {

        await Promise.all(validationRules.map(validation => validation.run(req)));

        const errors = validationResult(req);

        if (errors.isEmpty()) return next();

        res.status(400).send({
            message: 'Invalid request parameters',
            status: false,
            error: errors.array()
        });
    };
};

module.exports = validate;