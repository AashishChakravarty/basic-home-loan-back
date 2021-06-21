const words = require('../managers/words.manager');
const { matchedData } = require('express-validator');

const postWord = async (req, res) => {
  const { word } = matchedData(req, { locations: ['query'] });

  const condition = { word };
  const values = { word }
  words.
    updateOrCreate(condition, values)
    .then((result) => {
      res.json({
        status: true,
        message: 'Successfully Inserted',
        data: result
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something went to wrong please try again',
        status: false,
      });
    });
};

const getWords = async (req, res) => {
  const attributes = ['id', 'word', 'count'];
  const options = {
    order: [['count', 'DESC']],
    limit: 10
  }

  words
    .findAll(attributes, options)
    .then((result) => {
      res.status(200).send({
        message: 'Successfully fetch',
        status: true,
        data: result
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Something went to wrong please try again',
        status: false,
      });
    });
};

module.exports = { postWord, getWords }
