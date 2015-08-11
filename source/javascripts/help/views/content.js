beeConnect.HelpCenter.Views.HelpCenterContent = Backbone.View.extend({
  template: HandlebarsTemplates["help_center/content"],

  initialize: function(options) {
    this.eventAggregator.on("render:topic", this.render, this);
  },

  render: function(data) {
    this.$el.html(this.template(data));
  }
});
