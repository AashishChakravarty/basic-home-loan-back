var router = require("express").Router();


module.exports = function () {
  router.use("/words", require("./words.routes")());

  return router;
};