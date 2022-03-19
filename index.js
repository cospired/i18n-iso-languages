const codes = require('./codes.json');

const registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
const alpha2 = {};
const alpha3T = {};
const alpha3B = {};
const invertedAlpha3B = {};

codes.forEach((codeInformation) => {

  const [first, second, third] = codeInformation;

  alpha2[first] = second;
  alpha3T[second] = first;
  alpha3B[third] = first;
  invertedAlpha3B[first] = third;
});

function registerLocale(localeData) {

  if (!localeData.locale) {
    throw new TypeError('Missing localeData.locale');
  }

  if (!localeData.languages) {
    throw new TypeError('Missing localeData.languages');
  }

  registeredLocales[localeData.locale] = localeData.languages;
}

/*
* @param code Alpha-3T code
* @return Alpha-2 code or undefined
*/
function alpha3TToAlpha2(code) {

  return alpha3T[code];
}

/*
* @param code Alpha-3B code
* @return Alpha-2 code or undefined
*/
function alpha3BToAlpha2(code) {

  return alpha3B[code];
}

/*
* @param code Alpha-2 code
* @return Alpha-3T code or undefined
*/
function alpha2ToAlpha3T(code) {

  return alpha2[code];
}

/*
* @param code Alpha-2 code
* @return Alpha-3B code or undefined
*/
function alpha2ToAlpha3B(code) {

  return invertedAlpha3B[code];
}

/*
* @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
* @return ISO 639-2 alpha-3 T
*/
function toAlpha3T(code) {

  if (typeof code !== 'string') {

    return undefined;
  }

  const codeLower = code.toLowerCase();
  if (code.length === 2) {

    return alpha2ToAlpha3T(codeLower);
  }
  if (code.length === 3) {

    if (alpha3T[codeLower]) {

      return codeLower;
    }
    if (alpha3BToAlpha2(codeLower)) {

      return alpha2ToAlpha3T(alpha3BToAlpha2(codeLower));
    }
  }

  return undefined;
}

/*
 * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
 * @return ISO 639-2 alpha-3 B
 */
function toAlpha3B(code) {

  if (typeof code !== 'string') {

    return undefined;
  }

  const codeLower = code.toLowerCase();
  if (code.length === 2) {

    return alpha2ToAlpha3B(codeLower);
  }
  if (code.length === 3) {

    if (alpha3B[codeLower]) {

      return codeLower;
    }
    if (alpha3T[codeLower]) {

      return alpha2ToAlpha3B(alpha3TToAlpha2(codeLower));
    }
  }

  return undefined;
}

/*
* @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
* @return ISO 639-1 alpha-2
*/
function toAlpha2(code) {

  if (typeof code !== 'string') {

    return undefined;
  }

  const codeLower = code.toLowerCase();
  if (code.length === 2) {

    return codeLower;
  }
  if (code.length === 3) {

    if (alpha3B[codeLower]) {

      return alpha3BToAlpha2(codeLower);
    }
    if (alpha3T[codeLower]) {

      return alpha3TToAlpha2(codeLower);
    }
  }

  return undefined;
}

/*
 * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
 * @param lang language for country name
 * @return name or undefined
 */
function getName(code, lang) {

  try {
    const d = registeredLocales[lang.toLowerCase()];

    return d[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
}

/*
 * @param lang language for language names
 * @return Object of language code mapped to language name
 */
function getNames(lang) {

  const d = registeredLocales[lang.toLowerCase()];
  if (d === undefined) {
    return {};
  }

  return d;
}

/*
 * @param name name
 * @param lang language for language name
 * @return ISO 639-1 alpha-2 or undefined
 */
function getAlpha2Code(name, lang) {

  try {
    let p;
    const codenames = registeredLocales[lang.toLowerCase()];
    // eslint-disable-next-line no-restricted-syntax -- for loop for early exit
    for (p in codenames) {
      if (codenames[p].toLowerCase() === name.toLowerCase()) {
        return p;
      }
    }

    return undefined;
  } catch (err) {
    return undefined;
  }
}

/*
 * @return Object of alpha-2 codes mapped to alpha-3 T codes
 */
function getAlpha2Codes() {

  return alpha2;
}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 639-2 alpha-3 T or undefined
 */
function getAlpha3TCode(name, lang) {

  const code = getAlpha2Code(name, lang);
  if (code) {
    return toAlpha3T(code);
  }

  return undefined;

}

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 639-2 alpha-3 B or undefined
 */
function getAlpha3BCode(name, lang) {

  const code = getAlpha2Code(name, lang);
  if (code) {
    return toAlpha3B(code);
  }

  return undefined;

}

/*
 * @return Object of alpha-3 T codes mapped to alpha-2 codes
 */
function getAlpha3TCodes() {

  return alpha3T;
}

/*
 * @return Object of alpha-3 B codes mapped to alpha-2 codes
 */
function getAlpha3BCodes() {

  return alpha3B;
}

/*
 * @return Array of supported languages
 */
function langs() {

  return Object.keys(registeredLocales);
}

/*
 * @param code ISO 639-1 alpha-2, 639-2 alpha-3 T or B code
 * @return Boolean
 */
function isValid(code) {

  return toAlpha3T(code) !== undefined;
}

exports.alpha2ToAlpha3B = alpha2ToAlpha3B;
exports.alpha2ToAlpha3T = alpha2ToAlpha3T;
exports.alpha3BToAlpha2 = alpha3BToAlpha2;
exports.alpha3TToAlpha2 = alpha3TToAlpha2;
exports.getAlpha2Code = getAlpha2Code;
exports.getAlpha2Codes = getAlpha2Codes;
exports.getAlpha3BCode = getAlpha3BCode;
exports.getAlpha3BCodes = getAlpha3BCodes;
exports.getAlpha3TCode = getAlpha3TCode;
exports.getAlpha3TCodes = getAlpha3TCodes;
exports.getName = getName;
exports.getNames = getNames;
exports.isValid = isValid;
exports.langs = langs;
exports.registerLocale = registerLocale;
exports.toAlpha2 = toAlpha2;
exports.toAlpha3B = toAlpha3B;
exports.toAlpha3T = toAlpha3T;
