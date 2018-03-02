# i18n-iso-languages

i18n for ISO 3166-1 country codes. We support Alpha-2, Alpha-3 B and T codes from https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes

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

* `de`: German
* `en`: English
* `fr`: French

[List of ISO 639-1 codes](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)

### Country to Code

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
console.log("de (Alpha-2) => " + countries.alpha2ToAlpha3T("de") + " (Alpha-3 T)");
// de (Alpha-2) => deu (Alpha-3 T)

var languages = require("@cospired/i18n-iso-languages");
console.log("de (Alpha-2) => " + countries.alpha2ToAlpha3B("de") + " (Alpha-3 B)");
// de (Alpha-2) => ger (Alpha-3 B)
`````

### Get all ISO 639-1 (Alpha-2) codes

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(countries.getAlpha2Codes());
// { 'aa': 'aar', 'ab': 'abk', [...], 'za': 'zha', 'zu': 'zul' }
`````

### Get all ISO 639-2 (Alpha-3) codes

`````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(countries.getAlpha3TCodes());
// { 'aar': 'aa', 'abk': 'ab', [...], 'zha': 'za', 'zul': 'zu' }

var languages = require("@cospired/i18n-iso-languages");
console.log(countries.getAlpha3BCodes());
// { 'aar': 'aa', 'abk': 'ab', [...], 'zha': 'za', 'zul': 'zu' }
`````

### Validate country code
``````javascript
var languages = require("@cospired/i18n-iso-languages");
console.log(languages.isValid("de"), languages.isValid("ger"), languages.isValid("xx")));
// true, true, false
``````

## Contribution

To add a language:

* add a json file under langs/
* add the language to the `data` object in enty-node.js at the top
* add language to section **Supported languages** in README.md
* add language to keywords in package.json
* run `npm install && make test` to make sure that tests are passing
* open a PR on GitHub
