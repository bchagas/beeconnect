Handlebars.registerHelper("parameterize", function(value) {
  return value
          .toLowerCase()
          .replace(/[^a-z0-9]+/g,'-')
          .replace(/(^-|-$)/g,'');
});

Handlebars.registerHelper('link', function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="' + Handlebars.helpers.parameterize(url) + '">' + text + '</a>';

  return new Handlebars.SafeString(result);
});
