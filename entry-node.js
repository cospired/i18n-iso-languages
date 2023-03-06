const br = require('./langs/br.json');
const cs = require('./langs/cs.json');
const da = require('./langs/da.json');
const de = require('./langs/de.json');
const en = require('./langs/en.json');
const es = require('./langs/es.json');
const fi = require('./langs/fi.json');
const fr = require('./langs/fr.json');
const he = require('./langs/he.json');
const hu = require('./langs/hu.json');
const id = require('./langs/id.json');
const is = require('./langs/is.json');
const it = require('./langs/it.json');
const ja = require('./langs/ja.json');
const lt = require('./langs/lt.json');
const lv = require('./langs/lv.json');
const ms = require('./langs/ms.json');
const nl = require('./langs/nl.json');
const no = require('./langs/no.json');
const pl = require('./langs/pl.json');
const pt = require('./langs/pt.json');
const ro = require('./langs/ro.json');
const ru = require('./langs/ru.json');
const sv = require('./langs/sv.json');
const th = require('./langs/th.json');
const uk = require('./langs/uk.json');
const vi = require('./langs/vi.json');
const zh = require('./langs/zh.json');

const library = require('./index');

const locales = [
  br,
  cs,
  da,
  de,
  en,
  es,
  fi,
  fr,
  he,
  hu,
  id,
  is,
  it,
  ja,
  lt,
  lv,
  ms,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sv,
  th,
  uk,
  vi,
  zh,
];

for (let i = 0; i < locales.length; i += 1) {
  library.registerLocale(locales[i]);
}

module.exports = library;
