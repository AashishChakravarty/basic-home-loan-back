const { body } = require('express-validator');

const wordValidate = [
	body('word')
		.exists()
		.trim()
		.withMessage('word is missing'),
];

module.exports = {
	wordValidate
};