const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require('../../config/database')[env];
const db = {};

let connection;
// if (config.use_env_variable) {
//   sequelize = new Sequelize(process.env[config.use_env_variable], config);
// } else {
connection = new Sequelize(config.database, config.username, config.password, config);
// }
global.connection;

connection
  .authenticate()
  .then((err) => {
    if (err) {
      console.log(
        '\n######################################### ERROR IN DATABASE CONNECTION #########################################\n'
      );
      console.log('\n ERROR \n', err);
    } else {
      global.connection;
      console.log(
        '\n######################################### DATABASE CONNECTED #########################################\n'
      );
    }
  })
  .catch((error) => {
    console.log('error', error);
  });


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(connection, Sequelize.DataTypes);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});


db.connection = connection;
db.Sequelize = Sequelize;

module.exports = db;
