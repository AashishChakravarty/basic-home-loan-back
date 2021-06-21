const router = require('express').Router();

// Route Middleware
const validateRequest = require('../middleware/Validate');

// Validators
const { wordValidate,
} = require('../validators/Validator');

module.exports = function () {
  const words = require('../controllers/words');

  router.post('/', validateRequest(wordValidate), words.postWord);

  router.get('/', words.getWords);

  return router;
};
