beeConnect.HelpCenter.Views.HelpCenterSearchResults = Backbone.View.extend({
  template: HandlebarsTemplates["help_center/search_results"],

  events: {
    "click .results > li" : "showTopic"
  },

  initialize: function() {
    this.eventAggregator.on("render:results", this.render, this);
  },

  render: function(results) {
    this.$el.html(this.template(results));
  },

  showTopic: function(event) {
    event.preventDefault();
    var url = $(event.toElement).parent("li").attr("id");

    this.eventAggregator.trigger("render:result", url);
  }
});
