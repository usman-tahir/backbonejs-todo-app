app.views.menu = Backbone.View.extend({
  template: _.template($('#template-menu').html()),
  initialize: function () {
    this.render();
  },
  render: function () {
    this.$el.html(this.template({}));
  }
});
