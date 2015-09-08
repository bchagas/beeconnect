beeConnect.HelpCenter = {
  Views: {},
  Models: {},
  initialize: function(options) {
    Backbone.View.prototype.eventAggregator = _.extend({}, Backbone.Events);

    var normalize_index = 1;
    var last_index = options.menu.length + normalize_index;

    // Create search index
    options.indice = [];

    _.each(options.menu, function(option, key) {
      var title = options.menu[key].title + " > ";

      if(option.questions) {
        _.each(option.questions, function(sub_option, key) {
          options.indice.push({
            id: key + last_index,
            title: title + sub_option.title,
            href: sub_option.title
          });
        });
      }
    });

    var helpCenterModel = new beeConnect.HelpCenter.Models.HelpCenter(options);
    var topQuestionsView = new beeConnect.HelpCenter.Views.topQuestions({
      model: helpCenterModel
    });

    new beeConnect.HelpCenter.Views.HelpCenterMenu({
      model: helpCenterModel,
      el: options.el,
      topQuestionsView: topQuestionsView
    }).render();

    new beeConnect.HelpCenter.Views.HelpCenterSearch({
      indice: options.indice,
      el: $(".search")
    }).render();

    new beeConnect.HelpCenter.Views.HelpCenterSearchResults({
      el: $(".answer")
    }).render();

    new beeConnect.HelpCenter.Views.HelpCenterContent({
      el: $(".answer")
    }).render();

    Backbone.history.start();
  }
};
