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

    new beeConnect.HelpCenter.Views.HelpCenterMenu({
      model: helpCenterModel,
      el: options.el
    }).render();

    new beeConnect.HelpCenter.Views.HelpCenterSearch({
      indice: options.indice,
      el: options.search
    }).render();

    new beeConnect.HelpCenter.Views.HelpCenterSearchResults({
      el: options.content
    }).render();

    new beeConnect.HelpCenter.Views.HelpCenterContent({
      el: options.content
    }).render();

    Backbone.history.start();
  }
};
