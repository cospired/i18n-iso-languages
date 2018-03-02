var library = require("./index");

var locales = [
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/fr.json")
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
