iShop.HelpCenter.Views.HelpCenterSearch=Backbone.View.extend({template:HandlebarsTemplates["help_center/search"],events:{"keyup input#search":"searchTopic","click button[type='submit']":"searchTopic"},initialize:function(e){this.indice=e.indice,this.index=lunr(function(){this.field("title",{boost:10}),this.ref("id"),this.field("href")})},render:function(){this.$el.html(this.template()),this.createIndex()},createIndex:function(){var e=this;_.each(this.indice,function(i){e.index.add(i)})},searchTopic:function(){var e=this,i=this.$("input#search").val(),t=this.index.search(i).map(function(i){return e.indice.filter(function(e){return e.id===parseInt(i.ref,10)})[0]});console.log(t),this.eventAggregator.trigger("render:results",t)}});