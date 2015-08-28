Handlebars.registerHelper("parameterize", function(value) {
  var specialChars = [
    { val:"a",let:"áàãâä" },
    { val:"e",let:"éèêë" },
    { val:"i",let:"íìîï" },
    { val:"o",let:"óòõôö" },
    { val:"u",let:"úùûü" },
    { val:"c",let:"ç" },
    { val:"A",let:"ÁÀÃÂÄ" },
    { val:"E",let:"ÉÈÊË" },
    { val:"I",let:"ÍÌÎÏ" },
    { val:"O",let:"ÓÒÕÔÖ" },
    { val:"U",let:"ÚÙÛÜ" },
    { val:"C",let:"Ç" },
    { val:"",let:"?!()" }
  ];
    var $spaceSymbol = '-';
    var regex;
    var returnString = value;
    for (var i = 0; i < specialChars.length; i++) {
      regex = new RegExp("["+specialChars[i].let+"]", "g");
      returnString = returnString.replace(regex, specialChars[i].val);
      regex = null;
    }
    return returnString
            .replace(/\s/g, $spaceSymbol)
            .toLowerCase();
});

Handlebars.registerHelper('link', function(text, url) {
  text = Handlebars.Utils.escapeExpression(text);
  url  = Handlebars.Utils.escapeExpression(url);

  var result = '<a href="' + Handlebars.helpers.parameterize(url) + '">' + text + '<span class="icon">+</span></a>';

  return new Handlebars.SafeString(result);
});
