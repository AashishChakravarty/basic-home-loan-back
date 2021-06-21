const sequelize = require('sequelize');
const models = require('../models');

const { Words } = models;

const Op = sequelize.Op;

const updateOrCreate = async (where, values) => {
  const foundValues = await Words.findOne({ where, raw: true });
  if (!foundValues) {
    // word not found, create a new one
    const word = await Words.create(values);
    const result = word.get({ plain: true });
    return { ...result, created: true };
  }
  // Found an word, update it
  const word = await Words.update({ count: foundValues.count + 1 }, { where });
  return { ...word, created: false };
};

const findAll = async (attributes, options) => {
  return await Words.findAll({
    attributes,
    ...options,
  })
};

module.exports = { updateOrCreate, findAll };
