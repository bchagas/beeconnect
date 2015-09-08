beeConnect.HelpCenter.Views.topQuestions = Backbone.View.extend({
  template: HandlebarsTemplates["help_center/top-questions"],

  initialize: function(options) {
    this.model = options.model;
  },

  events: {
    "click li > a" : "getTopic",
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON().menu[0].questions));
  }
});
