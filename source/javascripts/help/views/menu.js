beeConnect.HelpCenter.Views.HelpCenterMenu = Backbone.View.extend({
  template: HandlebarsTemplates["help_center/navigation"],

  events: {
    "click .topics > li > a" : "getTopic",
    "click .top-questions ul > li > a" : "getTopic",
    "click .questions > li > span > a" : "showTopics",
  },

  initialize: function(options) {
    this.model = options.model;
    this.topQuestionsView = new beeConnect.HelpCenter.Views.topQuestions({
      model: this.model,
      el: this.$(".top-questions")
    });
    this.eventAggregator.on("render:result", this.getResultTopic, this);
  },

  render: function() {
    this.$(".all-questions nav").html(this.template(this.model.toJSON()));
    this.$(".top-questions").html(this.topQuestionsView.render());
    this.$(".topics").slideUp();
    return this;
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
        topics = el.parents("li").find("ul"),
        href = el.attr("href"),
        topic = el.parents("li");

    this.$(".topics").slideUp();
    $(".questions").find(".icon").text("+");

    this.setCurrent(el, ".questions");

    if(el.attr("href") !== topics.data("target")) {
      this.$(".topics").slideUp();
    }

    topics.slideDown();
    topic.find(".icon").text("-");
  },

  setCurrent: function(el, context) {
    this.$(context).find("a").removeClass("current");
    el.addClass("current");
  },
});
