"use strict";

var codes = require("./codes.json");
var registeredLocales = {};

/*
 * All codes map to ISO 3166-1 alpha-2
 */
var alpha2 = {},
  alpha3T = {},
  alpha3B = {},
  invertedAlpha3B = {};

codes.forEach(function(codeInformation) {
  var s = codeInformation;
  alpha2[s[0]] = s[1];
  alpha3T[s[1]] = s[0];
  alpha3B[s[2]] = s[0];
  invertedAlpha3B[s[0]] = s[2];
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
  if (typeof code === "string") {
    if(code.length === 2) {

      return alpha2ToAlpha3T(code.toLowerCase());
    }
    if (code.length === 3) {

      if( alpha3T[code.toLowerCase()] ) {

        return code.toLowerCase();
      }
      if( alpha3BToAlpha2(code.toLowerCase()) ) {

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
  if (typeof code === "string") {
    if(code.length === 2) {

      return alpha2ToAlpha3B(code.toLowerCase());
    }
    if (code.length === 3) {

      if( alpha3B[code.toLowerCase()] ) {

        return code.toLowerCase();
      }
      if( alpha3T[code.toLowerCase()] ) {

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
  if (typeof code === "string") {
    if (code.length === 2) {

      return code.toLowerCase();
    }
    if(code.length === 3) {

      if ( alpha3B[code.toLowerCase()]) {

        return alpha3BToAlpha2(code.toLowerCase());
      }
      if ( alpha3T[code.toLowerCase()]) {

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
exports.getName = function(code, lang) {
  try {
    var d = registeredLocales[lang.toLowerCase()];
    return d[toAlpha2(code)];
  } catch (err) {
    return undefined;
  }
};

/*
 * @param lang language for language names
 * @return Object of language code mapped to language name
 */
exports.getNames = function(lang) {
  var d = registeredLocales[lang.toLowerCase()];
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
exports.getAlpha2Code = function(name, lang) {
  try {
    var p, codenames = registeredLocales[lang.toLowerCase()];
    for (p in codenames) {
      if (codenames.hasOwnProperty(p)) {
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
exports.getAlpha2Codes = function() {
  return alpha2;
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 639-2 alpha-3 T or undefined
 */
exports.getAlpha3TCode = function(name, lang) {
  var alpha2 = this.getAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3T(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @param name name
 * @param lang language for country name
 * @return ISO 639-2 alpha-3 B or undefined
 */
exports.getAlpha3BCode = function(name, lang) {
  var alpha2 = this.getAlpha2Code(name, lang);
  if (alpha2) {
    return this.toAlpha3B(alpha2);
  } else {
    return undefined;
  }
};

/*
 * @return Object of alpha-3 T codes mapped to alpha-2 codes
 */
exports.getAlpha3TCodes = function() {
  return alpha3T;
};

/*
 * @return Object of alpha-3 B codes mapped to alpha-2 codes
 */
exports.getAlpha3BCodes = function() {
  return alpha3B;
};

/*
 * @return Array of supported languages
 */
exports.langs = function() {
  return Object.keys(registeredLocales);
};

/*
 * @param code ISO 639-1 alpha-2, 639-2 alpha-3 T or B code
 * @return Boolean
 */
exports.isValid = function(code) {
  return this.toAlpha3T(code) !== undefined;
};
