var library = require("./index");

var locales = [
  require("./langs/br.json"),
  require("./langs/cs.json"),
  require("./langs/de.json"),
  require("./langs/en.json"),
  require("./langs/es.json"),
  require("./langs/fi.json"),
  require("./langs/fr.json"),
  require("./langs/hu.json"),
  require("./langs/is.json"),
  require("./langs/it.json"),
  require("./langs/ja.json"),
  require("./langs/lv.json"),
  require("./langs/lt.json"),
  require("./langs/nl.json"),
  require("./langs/pl.json"),
  require("./langs/pt.json"),
  require("./langs/ru.json"),
  require("./langs/sv.json"),
  require("./langs/no.json"),
  require("./langs/da.json"),
  require("./langs/zh.json")
];

for (var i = 0; i < locales.length; i++) {
  library.registerLocale(locales[i]);
}

module.exports = library;
