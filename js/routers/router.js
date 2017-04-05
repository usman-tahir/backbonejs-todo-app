var app = app || {};

(function () {
  'use strict';

  var TodoRouter = Backbone.Router.extend({
    routes: {
      '*filter': 'setFilter'
    },

    setFilter: function (parameter) {
      app.TodoFilter = parameter || '';

      app.todos.trigger('filter');
    }
  });

  app.TodoRouter = new TodoRouter();
  Backbone.history.start();
})();
