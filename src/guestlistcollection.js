var app = require('./tinyapp'),
  Model = require('./guestmodel'),
  Collection = require('backbone-browserify')
    .Collection.extend({
      model: Model
    }),

  create = function create(models) {
    models = models || app.pageData.guestList;

    return new Collection(models);
  },

  api = {
    create: create
  };

module.exports = api;
