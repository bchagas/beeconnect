iShop.HelpCenter.Views.HelpCenterSearch = Backbone.View.extend({
  template: HandlebarsTemplates["help_center/search"],

  events: {
    "keyup input[type='search']" : "searchTopic",
    "click button[type='submit']" : "searchTopic"
  },

  initialize: function(options) {
    this.indice = options.indice;
    this.index = lunr(function() {
      this.field("title", { boost: 10 });
      this.ref("id");
      this.field("href");
    });
  },

  render: function() {
    this.$el.html(this.template());
    this.createIndex();
  },

  createIndex: function() {
    var self = this;

    _.each(this.indice, function(indice) {
      self.index.add(indice);
    });
  },

  searchTopic: function() {
    var self = this;
    var query = this.$("input[type='search']").val();
    var results = this.index.search(query).map(function (result) {
      return self.indice.filter(function (q) {
        return q.id === parseInt(result.ref, 10);
      })[0];
    });

    console.log(results);
    this.eventAggregator.trigger("render:results", results);
  },
});
