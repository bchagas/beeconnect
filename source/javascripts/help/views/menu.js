iShop.HelpCenter.Views.HelpCenterMenu = Backbone.View.extend({
  template: HandlebarsTemplates["help_center/navigation"],

  events: {
    "click .topics > li > a" : "getTopic",
    "click .questions > li > span > a" : "showTopics",
  },

  initialize: function(options) {
    this.model = options.model;
    this.eventAggregator.on("render:result", this.getResultTopic, this);
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
  },

  getResultTopic: function(url) {
    var self = this;

    this.model.fetchCurrent({
      data: url,
      success: function(xhr, data) {
        self.eventAggregator.trigger("render:topic", data);
      },

      error: function(xhr, data) {
        self.eventAggregator.trigger("render:topic", data.responseText);
      }
    });
  },

  getTopic: function(event) {
    event.preventDefault();
    var el = $(event.target),
        url = el.data("topic"),
        self = this;

    this.setCurrent(el, ".topics");

    this.model.fetchCurrent({
      data: url,
      success: function(xhr, data) {
        self.eventAggregator.trigger("render:topic", data);
      },

      error: function(xhr, data) {
        self.eventAggregator.trigger("render:topic", data.responseText);
      }
    });
  },

  showTopics: function(event) {
    event.preventDefault();

    var el = $(event.target),
        topics = el.parents("li").find("ul");

    this.setCurrent(el, ".questions");

    if(el.attr("href") !== topics.data("target")) {
      this.$(".topics").slideUp();
    }

    topics.slideDown();
  },

  setCurrent: function(el, context) {
    this.$(context).find("a").removeClass("current");
    el.addClass("current");
  },
});
