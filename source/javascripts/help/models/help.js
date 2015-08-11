beeConnect.HelpCenter.Models.HelpCenter = Backbone.Model.extend({
  urlRoot: "/ajuda/",
  fetchCurrent: function ( options) {
    options.url = this.urlRoot + options.data;

    return Backbone.Model.prototype.fetch.call(this, options);
  },
});
