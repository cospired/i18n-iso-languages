const ar = require('./langs/ar.json');
const bg = require('./langs/bg.json');
const br = require('./langs/br.json');
const ca = require('./langs/ca.json');
const cs = require('./langs/cs.json');
const da = require('./langs/da.json');
const de = require('./langs/de.json');
const el = require('./langs/el.json');
const en = require('./langs/en.json');
const es = require('./langs/es.json');
const et = require('./langs/et.json');
const fa = require('./langs/fa.json');
const fi = require('./langs/fi.json');
const fr = require('./langs/fr.json');
const he = require('./langs/he.json');
const hr = require('./langs/hr.json');
const hu = require('./langs/hu.json');
const id = require('./langs/id.json');
const is = require('./langs/is.json');
const it = require('./langs/it.json');
const ja = require('./langs/ja.json');
const ko = require('./langs/ko.json');
const la = require('./langs/la.json');
const lt = require('./langs/lt.json');
const lv = require('./langs/lv.json');
const ms = require('./langs/ms.json');
const nl = require('./langs/nl.json');
const no = require('./langs/no.json');
const pl = require('./langs/pl.json');
const pt = require('./langs/pt.json');
const ro = require('./langs/ro.json');
const ru = require('./langs/ru.json');
const sk = require('./langs/sk.json');
const sl = require('./langs/sl.json');
const sr = require('./langs/sr.json');
const sv = require('./langs/sv.json');
const th = require('./langs/th.json');
const tr = require('./langs/tr.json');
const uk = require('./langs/uk.json');
const vi = require('./langs/vi.json');
const zh = require('./langs/zh.json');

const library = require('./index');

const locales = [
  ar,
  bg,
  br,
  ca,
  cs,
  da,
  de,
  el,
  en,
  es,
  et,
  fa,
  fi,
  fr,
  he,
  hr,
  hu,
  id,
  is,
  it,
  ja,
  ko,
  la,
  lt,
  lv,
  ms,
  nl,
  no,
  pl,
  pt,
  ro,
  ru,
  sk,
  sl,
  sr,
  sv,
  th,
  tr,
  uk,
  vi,
  zh,
];

for (let i = 0; i < locales.length; i += 1) {
  library.registerLocale(locales[i]);
}

module.exports = library;
