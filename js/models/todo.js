app.models.ToDo = Backbone.Model.extend({
  defaults: {
    title: 'Todo',
    archived: false,
    done: false
  }
});
