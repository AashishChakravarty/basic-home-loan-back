const { query } = require('express-validator');

const wordValidate = [
	query('word')
		.exists()
		.trim()
		.withMessage('word is missing'),
];

module.exports = {
	wordValidate
};