[![Build Status](https://travis-ci.com/cospired/i18n-iso-languages.svg?branch=main)](https://travis-ci.com/cospired/i18n-iso-languages)
[![npm version](https://badge.fury.io/js/%40cospired%2Fi18n-iso-languages.svg)](https://badge.fury.io/js/%40cospired%2Fi18n-iso-languages)
[![Maintainability](https://api.codeclimate.com/v1/badges/31071476c2117e90d6fe/maintainability)](https://codeclimate.com/github/cospired/i18n-iso-languages/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/31071476c2117e90d6fe/test_coverage)](https://codeclimate.com/github/cospired/i18n-iso-languages/test_coverage)

# i18n-iso-languages

i18n for ISO 639 language codes. We support Alpha-2, Alpha-3 B and T codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

This packages is heavily based on [i18n-iso-countries](https://github.com/michaelwittig/node-i18n-iso-countries).

We intent to keep the interface of i18n-iso-languages as close as possible to i18n-iso-countries.
## Installing

Install it using npm: `npm install @cospired/i18n-iso-languages`

If used in a browser environment, you will need to manually install the local you wish to support.

```javascript
var languages = require("@cospired/i18n-iso-languages");

// Support german & english languages.
languages.registerLocale(require("@cospired/i18n-iso-languages/langs/en.json"));
languages.registerLocale(require("@cospired/i18n-iso-languages/langs/de.json"));
```

## Code to Language

### Get the name of a language by it's ISO 639-1 (Alpha-2), ISO 639-2/T or B (Alpha-3) code

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log("de (639-1/Alpha-2) => " + languages.getName("de", "en")); // German
console.log("en (639-1/Alpha-2) => " + languages.getName("de", "de")); // Deutsch
console.log("de (639-2T/Alpha-3) => " + languages.getName("deu", "en")); // German
console.log("de (639-2B/Alpha-3) => " + languages.getName("ger", "en")); // German
`````

### Get all names by their ISO 639-1 code

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(languages.getNames("en")); // { 'ab': 'Abkhazian', 'aa': 'Afar', [...], 'za': 'Zhuang', 'zu': 'Zulu' }
`````

### Supported languages (ISO 639-1)

* `br`: Breton (based on https://br.wikipedia.org/wiki/Listenn_glok_kodoù_ISO_639-1)
* `cs`: Czech (based on https://cs.wikipedia.org/wiki/Seznam_kódů_ISO_639-1)
* `da`: Danish (based on https://da.wikipedia.org/wiki/ISO_639-1)
* `de`: German (by native speaker)
* `en`: English (ISO 639-1 standard names)
* `es`: Spanish (based on https://es.wikipedia.org/wiki/ISO_639-1)
* `fi`: Finnish (based on https://kotoistus.fi/suositukset/suositukset-kielet-fi-koodi/)
* `fr`: French (based on https://fr.wikipedia.org/wiki/Liste_des_codes_ISO_639-1)
* `he`: Hebrew (based on ECMAScript Internationalization API data)
* `hu`: Hungarian (based on https://hu.wikipedia.org/wiki/ISO_639-1_nyelvkódok_listája)
* `id`: Indonesian (based on https://github.com/umpirsky/language-list/blob/master/data/id/language.json)
* `is`: Islandic (based on https://is.wikipedia.org/wiki/Listi_yfir_tungumálakóða_%C3%AD_ISO_639-1)
* `it`: Italian (based on https://github.com/umpirsky/language-list/blob/master/data/it/language.json)
* `ja`: Japanese (by professional translator)
* `lt`: Lithuanian (based on https://lt.wikipedia.org/wiki/Sąrašas:ISO_639-1_kodai)
* `lv`: Latvian (based on https://lv.wikipedia.org/wiki/ISO_639-1_kodu_saraksts)
* `ms`: Malay (based on https://github.com/umpirsky/language-list/blob/master/data/ms/language.json)
* `nl`: Dutch (based on https://nl.wikipedia.org/wiki/Lijst_van_ISO_639-codes)
* `no`: Norwegian (based on https://no.wikipedia.org/wiki/Liste_over_ISO_639-1-koder)
* `pl`: Polish (based on https://pl.wiktionary.org/wiki/Wikis%C5%82ownik:Kody_j%C4%99zyk%C3%B3w)
* `pt`: Portuguese (European) (based on https://pt.wikipedia.org/wiki/ISO_639)
* `ro`: Romanian (based on https://ro.wikipedia.org/wiki/Lista_codurilor_ISO_639-1)
* `ru`: Russian (by professional translator)
* `sv`: Swedish (based on https://sv.wikipedia.org/wiki/ISO_639)
* `th`: Thai (based on https://github.com/umpirsky/language-list/blob/master/data/th/language.json)
* `uk`: Ukrainian (based on https://uk.wikipedia.org/wiki/Список_мовних_кодів_ISO_639)
* `vi`: Vietnamese (based on https://github.com/umpirsky/language-list/blob/master/data/vi/language.json)
* `zh`: Chinese (by professional translator)


[List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### Language to Code

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log("German => " + languages.getAlpha2Code('German', 'en'));
// German => de

console.log("German => " + languages.getAlpha3TCode('German', 'en'));
// German => deu

console.log("German => " + languages.getAlpha3BCode('German', 'en'));
// German => ger
`````

## Codes

### Convert ISO 639-2 (Alpha-3) to ISO 639-1 (Alpha-2) code

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log("deu (Alpha-3) => " + languages.alpha3ToAlpha2("deu") + " (Alpha-2)");
// deu (Alpha-3 T) => de (Alpha-2)

var languages = require("@cospired/i18n-iso-languages");
console.log("ger (Alpha-3 B) => " + languages.alpha3ToAlpha2("ger") + " (Alpha-2)");
// ger (Alpha-3 B) => de (Alpha-2)
`````

### Convert ISO 639-1 (Alpha-2) to ISO 639-2 (Alpha-3) code
`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log("de (Alpha-2) => " + languages.alpha2ToAlpha3T("de") + " (Alpha-3 T)");
// de (Alpha-2) => deu (Alpha-3 T)

var languages = require("@cospired/i18n-iso-languages");
console.log("de (Alpha-2) => " + languages.alpha2ToAlpha3B("de") + " (Alpha-3 B)");
// de (Alpha-2) => ger (Alpha-3 B)
`````

### Get all ISO 639-1 (Alpha-2) codes

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(languages.getAlpha2Codes());
// { 'aa': 'aar', 'ab': 'abk', [...], 'za': 'zha', 'zu': 'zul' }
`````

### Get all ISO 639-2 (Alpha-3) codes

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(languages.getAlpha3TCodes());
// { 'aar': 'aa', 'abk': 'ab', [...], 'zha': 'za', 'zul': 'zu' }

var languages = require("@cospired/i18n-iso-languages");
console.log(languages.getAlpha3BCodes());
// { 'aar': 'aa', 'abk': 'ab', [...], 'zha': 'za', 'zul': 'zu' }
`````

### Validate language code
``````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(languages.isValid("de"), languages.isValid("ger"), languages.isValid("xx")));
// true, true, false
``````

## Contribution

To add a language:

* add a json file under langs/ (in alphabetical order)
* add the language to the `data` object in enty-node.js at the top (in alphabetical order)
* add language to section **Supported languages** in README.md (in alphabetical order)
* add language to keywords in package.json (in alphabetical order)
* add language to the "unreleased" section of the changelog
* run `npm install && make test` to make sure that tests are passing
* open a PR on GitHub

Please do not change the version in package.json, package-lock.json or changelog.md.
