app.views.form = Backbone.View.extend({
  index: false,
  events: {
    'click button': 'save'
  },

  initialize: function () {
    this.render();
  },

  render: function(index) {
    var template, html = $('#template-form').html();
    if (typeof index == 'undefined') {
      this.index = false;
      template = _.template(html, {title: ''})''
    } else {
      this.index = parseInt(index);
      this.todoForEditing = this.model.at(this.index);
      template = _.template($('#template-form').html(), {
        title: this.todoForEditing.get('title');
      });
    }
    this.$el.html(template);
    this.$el.find('textarea').focus();
    thi.delegateEvents();
    return this;
  },

  save: function (e) {
    e.preventDefault();
    var title = this.$el.find('textarea').val();
    if (title === '') {
      console.log('Empty text area.');
      return;
    } else {
      this.model.add({title: title});
    }
    this.trigger('saved');
  }
});
