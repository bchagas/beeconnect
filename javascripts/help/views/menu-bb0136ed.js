iShop.HelpCenter.Views.HelpCenterMenu=Backbone.View.extend({template:HandlebarsTemplates["help_center/navigation"],events:{"click .topics > li > a":"getTopic","click .questions > li > span > a":"showTopics"},initialize:function(e){this.model=e.model,this.eventAggregator.on("render:result",this.getResultTopic,this)},render:function(){this.$el.html(this.template(this.model.toJSON()))},getResultTopic:function(e){var t=this;this.model.fetchCurrent({data:e,success:function(e,r){t.eventAggregator.trigger("render:topic",r)},error:function(e,r){t.eventAggregator.trigger("render:topic",r.responseText)}})},getTopic:function(e){e.preventDefault();var t=$(e.target),r=t.data("topic"),i=this;this.setCurrent(t,".topics"),this.model.fetchCurrent({data:r,success:function(e,t){i.eventAggregator.trigger("render:topic",t)},error:function(e,t){i.eventAggregator.trigger("render:topic",t.responseText)}})},showTopics:function(e){e.preventDefault();var t=$(e.target),r=t.parents("li").find("ul");this.setCurrent(t,".questions"),t.attr("href")!==r.data("target")&&this.$(".topics").slideUp(),r.slideDown()},setCurrent:function(e,t){this.$(t).find("a").removeClass("current"),e.addClass("current")}});