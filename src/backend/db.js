var mongoose = require('mongoose'),
    config = require('config');

module.exports = function() {
  mongoose.connect(config.mongo.connection);
}