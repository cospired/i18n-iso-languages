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

exports.registerLocale = registerLocale;

/*
 * @param code Alpha-3T code
 * @return Alpha-2 code or undefined
 */
function alpha3TToAlpha2(code) {

  return alpha3T[code];
}
exports.alpha3TToAlpha2 = alpha3TToAlpha2;

/*
 * @param code Alpha-3B code
 * @return Alpha-2 code or undefined
 */
function alpha3BToAlpha2(code) {

  return alpha3B[code];
}
exports.alpha3BToAlpha2 = alpha3BToAlpha2;

/*
 * @param code Alpha-2 code
 * @return Alpha-3T code or undefined
 */
function alpha2ToAlpha3T(code) {

  return alpha2[code];
}
exports.alpha2ToAlpha3T = alpha2ToAlpha3T;

/*
 * @param code Alpha-2 code
 * @return Alpha-3B code or undefined
 */
function alpha2ToAlpha3B(code) {

  return invertedAlpha3B[code];
}
exports.alpha2ToAlpha3B = alpha2ToAlpha3B;

/*
 * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
 * @return ISO 639-2 alpha-3 T
 */
function toAlpha3T(code) {

  if (typeof code === 'string') {
    if (code.length === 2) {

      return alpha2ToAlpha3T(code.toLowerCase());
    }
    if (code.length === 3) {

      if (alpha3T[code.toLowerCase()]) {

        return code.toLowerCase();
      }
      if (alpha3BToAlpha2(code.toLowerCase())) {

        return alpha2ToAlpha3T(alpha3BToAlpha2(code.toLowerCase()));
      }
    }
  }

  return undefined;
}
exports.toAlpha3T = toAlpha3T;

/*
 * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
 * @return ISO 639-2 alpha-3 B
 */
function toAlpha3B(code) {

  if (typeof code === 'string') {
    if (code.length === 2) {

      return alpha2ToAlpha3B(code.toLowerCase());
    }
    if (code.length === 3) {

      if (alpha3B[code.toLowerCase()]) {

        return code.toLowerCase();
      }
      if (alpha3T[code.toLowerCase()]) {

        return alpha2ToAlpha3B(alpha3TToAlpha2(code.toLowerCase()));
      }
    }
  }

  return undefined;
}
exports.toAlpha3B = toAlpha3B;

/*
 * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
 * @return ISO 639-1 alpha-2
 */
function toAlpha2(code) {

  if (typeof code === 'string') {
    if (code.length === 2) {

      return code.toLowerCase();
    }
    if (code.length === 3) {

      if (alpha3B[code.toLowerCase()]) {

        return alpha3BToAlpha2(code.toLowerCase());
      }
      if (alpha3T[code.toLowerCase()]) {

        return alpha3TToAlpha2(code.toLowerCase());
      }
    }
  }

  return undefined;
}
exports.toAlpha2 = toAlpha2;

/*
 * @param code ISO 639-1 alpha-2, ISO 639-2 alpha-3 T or B
 * @param lang language for country name
 * @return name or undefined
 */
exports.getName = function getName(code, lang) {

  try {
    const d = registeredLocales[lang.toLowerCase()];

    return d[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
};

/*
 * @param lang language for language names
 * @return Object of language code mapped to language name
 */
exports.getNames = function getNames(lang) {

  const d = registeredLocales[lang.toLowerCase()];
  if (d === undefined) {
    return {};
  }

  return d;
};

/*
 * @param name name
 * @param lang language for language name
 * @return ISO 639-1 alpha-2 or undefined
 */
exports.getAlpha2Code = function getAlpha2Code(name, lang) {

  try {
    let p;
    const codenames = registeredLocales[lang.toLowerCase()];
    // eslint-disable-next-line no-restricted-syntax -- for loop for early exit
    for (p in codenames) {
      if (Object.prototype.hasOwnProperty.call(codenames, p)) {
        if (codenames[p].toLowerCase() === name.toLowerCase()) {
          return p;
        }
      }
    }

    return undefined;
  } catch (err) {
    return undefined;
  }
};

/*
 * @return Object of alpha-2 codes mapped to alpha-3 T codes
 */
exports.getAlpha2Codes = function getAlpha2Codes() {

  return alpha2;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 639-2 alpha-3 T or undefined
 */
exports.getAlpha3TCode = function getAlpha3TCode(name, lang) {

  const code = this.getAlpha2Code(name, lang);
  if (code) {
    return this.toAlpha3T(code);
  }

  return undefined;

};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 639-2 alpha-3 B or undefined
 */
exports.getAlpha3BCode = function getAlpha3BCode(name, lang) {

  const code = this.getAlpha2Code(name, lang);
  if (code) {
    return this.toAlpha3B(code);
  }

  return undefined;

};

/*
 * @return Object of alpha-3 T codes mapped to alpha-2 codes
 */
exports.getAlpha3TCodes = function getAlpha3TCodes() {

  return alpha3T;
};

/*
 * @return Object of alpha-3 B codes mapped to alpha-2 codes
 */
exports.getAlpha3BCodes = function getAlpha3BCodes() {

  return alpha3B;
};

/*
 * @return Array of supported languages
 */
exports.langs = function langs() {

  return Object.keys(registeredLocales);
};

/*
 * @param code ISO 639-1 alpha-2, 639-2 alpha-3 T or B code
 * @return Boolean
 */
exports.isValid = function isValid(code) {

  return this.toAlpha3T(code) !== undefined;
};
