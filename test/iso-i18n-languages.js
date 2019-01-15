var assert = require("assert-plus"),
  i18niso = require("../");

describe("i18n for iso 639-1", function () {
  "use strict";
  describe("639-1 (Alpha-2) to 639-1 (Alpha-2) code", function() {
    it("toAlpha2 de => de", function() {
      assert.equal(i18niso.toAlpha2("de"), "de");
    });
  });
  describe("639-1 (Alpha-2) to 639-2/T (Alpha-3) code", function() {
    it("toAlpha3T true => undefined", function() {
      assert.equal(i18niso.toAlpha3T(true), undefined);
    });
    it("toAlpha3T XX => undefined", function() {
      assert.equal(i18niso.toAlpha3T("XX"), undefined);
    });
    it("toAlpha3T de => deu", function() {
      assert.equal(i18niso.toAlpha3T("de"), "deu");
    });
    it("alpha2ToAlpha3T de => deu", function() {
      assert.equal(i18niso.alpha2ToAlpha3T("de"), "deu");
    });
  });
  describe("639-2/T (Alpha-3) to 639-2/T (Alpha-3) code", function() {
    it("toAlpha2 SGP => SGP", function() {
      assert.equal(i18niso.toAlpha3T("deu"), "deu");
    });
  });
  describe("639-2/T (Alpha-3) to 639-1 (Alpha-2) code", function() {
    it("toAlpha2 true => undefined", function() {
      assert.equal(i18niso.toAlpha2(true), undefined);
    });
    it("toAlpha2 XXX => undefined", function() {
      assert.equal(i18niso.toAlpha2("XXX"), undefined);
    });
    it("toAlpha2 deu => de", function() {
      assert.equal(i18niso.toAlpha2("deu"), "de");
    });
    it("alpha3ToAlpha2 deu => de", function() {
      assert.equal(i18niso.alpha3TToAlpha2("deu"), "de");
    });
  });
  describe("639-2/T (Alpha-3) to 639-2/B (Alpha-3) code", function() {
    it("toAlpha3B deu => ger", function() {
      assert.equal(i18niso.toAlpha3B("deu"), "ger");
    });
    it("toAlpha3B eng => eng", function() {
      assert.equal(i18niso.toAlpha3B("eng"), "eng");
    });
  });
  describe("639-1 (Alpha-2) to 639-2/B (Alpha-3) code", function() {
    it("alpha2ToAlpha3B SE => 752", function() {
      assert.equal(i18niso.alpha2ToAlpha3B("de"), "ger");
    });
    it("alpha2ToAlpha3B DJ => 262", function() {
      assert.equal(i18niso.alpha2ToAlpha3B("en"), "eng");
    });
  });
  describe("639-2/B (Alpha-3) to 639-1 (Alpha-2) code", function() {
    it("toAlpha2 'ger' => de", function() {
      assert.equal(i18niso.toAlpha2("ger"), "de");
    });
    it("toAlpha2 'eng' => en", function() {
      assert.equal(i18niso.toAlpha2("eng"), "en");
    });
    it("alpha3BToAlpha2 'ger' => de", function() {
      assert.equal(i18niso.alpha3BToAlpha2("ger"), "de");
    });
    it("alpha3BToAlpha2 'eng' => en", function() {
      assert.equal(i18niso.alpha3BToAlpha2("eng"), "en");
    });
  });
  describe("639-2/B (Alpha-3) to 639-2/T (Alpha-3) code", function() {
    it("toAlpha3T 'ger' => deu", function() {
      assert.equal(i18niso.toAlpha3T("ger"), "deu");
    });
    it("toAlpha3T 'eng' => eng", function() {
      assert.equal(i18niso.toAlpha3T("eng"), "eng");
    });
  });
  describe("getAlpha2Codes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18niso.getAlpha2Codes()).length, 184);
    });
  });
  describe("getAlpha3TCodes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18niso.getAlpha3TCodes()).length, 184);
    });
  });
  describe("getAlpha3BCodes", function() {
    it("length", function() {
      assert.equal(Object.keys(i18niso.getAlpha3BCodes()).length, 184);
    });
  });
  describe("getAlpha2Code", function() {
    it("missing name", function() {
      assert.equal(i18niso.getAlpha2Code("XXX", "de"), undefined);
    });
    it("missing language", function() {
      assert.equal(i18niso.getAlpha2Code("Deutsch", "xx"), undefined);
    });
  });
  describe("getAlpha3TCode", function() {
    it("missing name", function() {
      assert.equal(i18niso.getAlpha3TCode("XXX", "de"), undefined);
    });
    it("missing language", function() {
      assert.equal(i18niso.getAlpha3TCode("Deutsch", "xx"), undefined);
    });
  });
  describe("getAlpha3BCode", function() {
    it("missing name", function() {
      assert.equal(i18niso.getAlpha3BCode("XXX", "de"), undefined);
    });
    it("missing language", function() {
      assert.equal(i18niso.getAlpha3BCode("Deutsch", "xx"), undefined);
    });
  });
  describe("isValid", function() {
    it("isValid true => false", function() {
      assert.equal(i18niso.isValid(true), false);
    });
    it("isValid XX => false", function() {
      assert.equal(i18niso.isValid("XX"), false);
    });
    it("isValid de => true", function() {
      assert.equal(i18niso.isValid("de"), true);
    });
    it("isValid deu => true", function() {
      assert.equal(i18niso.isValid("deu"), true);
    });
    it("isValid ger => true", function() {
      assert.equal(i18niso.isValid("ger"), true);
    });
    it("isValid xxx => false", function() {
      assert.equal(i18niso.isValid("xxx"), false);
    });
  });
  describe("completeness", function () {
    i18niso.langs().forEach(function(lang) {
      describe(lang + " completeness", function () {
        it("complete (to less)", function() {
          Object.keys(i18niso.getAlpha2Codes()).forEach(function(code) {
            assert.notEqual(i18niso.getName(code, lang), undefined, "missing entry for " + code);
          });
        });
        it("complete (too much)", function() {
          Object.keys(i18niso.getNames(lang)).forEach(function(code) {
            assert.notStrictEqual(i18niso.getAlpha2Codes()[code], void 0, "entry for " + code + " in lang " + lang + " is too much");
          });
        });
      });
    });
  });
  describe("langs", function() {
    describe("de", function () {
      var lang = "de";
      describe("get name", function () {
        it("for de", function () {
          assert.equal(i18niso.getName("de", lang), "Deutsch");
        });
        it("for en", function () {
          assert.equal(i18niso.getName("en", lang), "Englisch");
        });
        it("for EN", function () {
          assert.equal(i18niso.getName("EN", lang), "Englisch");
        });
        it("for deu", function () {
          assert.equal(i18niso.getName("deu", lang), "Deutsch");
        });
        it("for af", function () {
          assert.equal(i18niso.getName("ger", lang), "Deutsch");
        });
      });
    });
    describe("en", function () {
      var lang = "en";
      describe("get 639-1 (Alpha-2) code", function() {
        it("nameToAlpha2 German => de", function() {
          assert.equal(i18niso.getAlpha2Code("German", lang), "de");
        });
        it("nameToAlpha2 English => en", function() {
          assert.equal(i18niso.getAlpha2Code("English", lang), "en");
        });
      });
      describe("get 639-2/T (Alpha-3) code", function() {
        it("nameToAlpha3T English => eng", function() {
          assert.equal(i18niso.getAlpha3TCode("English", lang), "eng");
        });
        it("nameToAlpha3T German => ger", function() {
          assert.equal(i18niso.getAlpha3TCode("German", lang), "deu");
        });
      });
      describe("get 639-2/b (Alpha-3) code", function() {
        it("nameToAlpha3b English => eng", function() {
          assert.equal(i18niso.getAlpha3BCode("English", lang), "eng");
        });
        it("nameToAlpha3b German => ger", function() {
          assert.equal(i18niso.getAlpha3BCode("German", lang), "ger");
        });
      });
      describe("get name", function () {
        it("for de", function () {
          assert.equal(i18niso.getName("de", lang), "German");
        });
        it("for em", function () {
          assert.equal(i18niso.getName("en", lang), "English");
        });
        it("for EN", function () {
          assert.equal(i18niso.getName("EN", lang), "English");
        });
        it("for deu", function () {
          assert.equal(i18niso.getName("deu", lang), "German");
        });
        it("for ger", function () {
          assert.equal(i18niso.getName("ger", lang), "German");
        });
      });
    });
    describe("unsupported language", function () {
      var lang = "unsupported";
      it("get name", function () {
        assert.equal(i18niso.getName("de", lang), undefined);
      });
      it("get names", function () {
        assert.equal(Object.keys(i18niso.getNames(lang)).length, 0);
      });
    });
  });
});
