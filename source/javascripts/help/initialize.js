iShop.HelpCenter = {
  Views: {},
  Models: {},
  initialize: function(options) {
    Backbone.View.prototype.eventAggregator = _.extend({}, Backbone.Events);

    var helpCenterModel = new iShop.HelpCenter.Models.HelpCenter(options);

    new iShop.HelpCenter.Views.HelpCenterMenu({
      model: helpCenterModel,
      el: options.el
    }).render();

    new iShop.HelpCenter.Views.HelpCenterContent({el: options.content});
    Backbone.history.start();
  }
};
