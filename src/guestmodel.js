var Model = require('backbone-browserify').Model,
  app = require('./tinyapp'),

  // Set the checkedIn attribute on the model.

  toggleCheckedIn = function toggleCheckedIn() {
    this.set('checkedIn', !this.get('checkedIn'));
  },

  delegate = function delegate() {
    var sourceId = this.get('id');

    // Listen for toggled event, sent from the view.
    // sourceId is used to filter the event. The model
    // does not need to know where the event comes from --
    // only which item was clicked.

    app.on('toggled-checkedin', sourceId,
      toggleCheckedIn.bind(this));


    // Relay the change event so the view can listen for it
    // without knowing anything about the model.

    this.on('change:checkedIn', function (item) {

      // Send a shallow copy of the list item as the
      // message payload. Make sure the new checkedIn
      // state is easy to access.

      var event = app.extend({}, item, {
        sourceId: this.id,
        checkedIn: item.get('checkedIn')
      });


      // Broadcast the message on the aggregator.

      app.trigger('changed.checkedIn', event);
    }.bind(this));  
  },

  // The collection expects a Backbone.Model constructor.

  api = Model.extend({
    initialize: delegate,
    toggleCheckedIn: toggleCheckedIn
  });

module.exports = api;
