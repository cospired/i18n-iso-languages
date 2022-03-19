const assert = require('assert-plus');

const i18niso = require('..');

describe('i18n for iso 639-1', () => {

  describe('639-1 (Alpha-2) to 639-1 (Alpha-2) code', () => {

    it('toAlpha2 de => de', () => {

      assert.equal(i18niso.toAlpha2('de'), 'de');
    });
  });
  describe('incorrect input toAlpha3T', () => {

    it('toAlpha3T true => undefined', () => {

      assert.equal(i18niso.toAlpha3T(true), undefined);
    });
    it('toAlpha3T XX => undefined', () => {

      assert.equal(i18niso.toAlpha3T('XX'), undefined);
    });
    it('toAlpha3T >4 letter code => undefined', () => {

      assert.equal(i18niso.toAlpha3T('xxxx'), undefined);
    });
  });
  describe('639-1 (Alpha-2) to 639-2/T (Alpha-3) code', () => {

    it('toAlpha3T de => deu', () => {

      assert.equal(i18niso.toAlpha3T('de'), 'deu');
    });
    it('alpha2ToAlpha3T de => deu', () => {

      assert.equal(i18niso.alpha2ToAlpha3T('de'), 'deu');
    });
  });
  describe('639-2/T (Alpha-3) to 639-2/T (Alpha-3) code', () => {

    it('toAlpha3T deu => deu', () => {

      assert.equal(i18niso.toAlpha3T('deu'), 'deu');
    });
  });
  describe('incorrect input toAlpha2', () => {

    it('toAlpha2 true => undefined', () => {

      assert.equal(i18niso.toAlpha2(true), undefined);
    });
    it('toAlpha2 XXX => undefined', () => {

      assert.equal(i18niso.toAlpha2('XXX'), undefined);
    });
    it('toAlpha2 >4 letter code => undefined', () => {

      assert.equal(i18niso.toAlpha2('xxxx'), undefined);
    });
  });
  describe('639-2/T (Alpha-3) to 639-1 (Alpha-2) code', () => {

    it('toAlpha2 deu => de', () => {

      assert.equal(i18niso.toAlpha2('deu'), 'de');
    });
    it('alpha3ToAlpha2 deu => de', () => {

      assert.equal(i18niso.alpha3TToAlpha2('deu'), 'de');
    });
  });
  describe('incorrect input toAlpha3B', () => {

    it('toAlpha3B not string => undefined', () => {

      assert.equal(i18niso.toAlpha3B(), undefined);
      assert.equal(i18niso.toAlpha3B(7), undefined);
    });
    it('toAlpha3B >4 letter code => undefined', () => {

      assert.equal(i18niso.toAlpha3B('xxxx'), undefined);
    });
    it('toAlpha3B incorrect 3 letter code => undefined', () => {

      assert.equal(i18niso.toAlpha3B('xxx'), undefined);
    });
  });
  describe('639-2/T (Alpha-3) to 639-2/B (Alpha-3) code', () => {

    it('toAlpha3B deu => ger', () => {

      assert.equal(i18niso.toAlpha3B('deu'), 'ger');
    });
    it('toAlpha3B eng => eng', () => {

      assert.equal(i18niso.toAlpha3B('eng'), 'eng');
    });
  });
  describe('639-1 (Alpha-2) to 639-2/B (Alpha-3) code', () => {

    it('alpha2ToAlpha3B SE => 752', () => {

      assert.equal(i18niso.alpha2ToAlpha3B('de'), 'ger');
    });
    it('alpha2ToAlpha3B DJ => 262', () => {

      assert.equal(i18niso.alpha2ToAlpha3B('en'), 'eng');
    });
  });
  describe('639-2/B (Alpha-3) to 639-1 (Alpha-2) code', () => {

    it("toAlpha2 'ger' => de", () => {

      assert.equal(i18niso.toAlpha2('ger'), 'de');
    });
    it("toAlpha2 'eng' => en", () => {

      assert.equal(i18niso.toAlpha2('eng'), 'en');
    });
    it("alpha3BToAlpha2 'ger' => de", () => {

      assert.equal(i18niso.alpha3BToAlpha2('ger'), 'de');
    });
    it("alpha3BToAlpha2 'eng' => en", () => {

      assert.equal(i18niso.alpha3BToAlpha2('eng'), 'en');
    });
  });
  describe('639-2/B (Alpha-3) to 639-2/T (Alpha-3) code', () => {

    it("toAlpha3T 'ger' => deu", () => {

      assert.equal(i18niso.toAlpha3T('ger'), 'deu');
    });
    it("toAlpha3T 'eng' => eng", () => {

      assert.equal(i18niso.toAlpha3T('eng'), 'eng');
    });
  });
  describe('getAlpha2Codes', () => {

    it('length', () => {

      assert.equal(Object.keys(i18niso.getAlpha2Codes()).length, 184);
    });
  });
  describe('getAlpha3TCodes', () => {

    it('length', () => {

      assert.equal(Object.keys(i18niso.getAlpha3TCodes()).length, 184);
    });
  });
  describe('getAlpha3BCodes', () => {

    it('length', () => {

      assert.equal(Object.keys(i18niso.getAlpha3BCodes()).length, 184);
    });
  });
  describe('getAlpha2Code', () => {

    it('missing name', () => {

      assert.equal(i18niso.getAlpha2Code('XXX', 'de'), undefined);
    });
    it('missing language', () => {

      assert.equal(i18niso.getAlpha2Code('Deutsch', 'xx'), undefined);
    });
    it('should return undefined on error', () => {

      assert.equal(i18niso.getAlpha2Code(), undefined);
      assert.equal(i18niso.getAlpha2Code('xxx'), undefined);
      assert.equal(i18niso.getAlpha2Code(undefined, 'xx'), undefined);
    });
  });
  describe('getAlpha3TCode', () => {

    it('missing name', () => {

      assert.equal(i18niso.getAlpha3TCode('XXX', 'de'), undefined);
    });
    it('missing language', () => {

      assert.equal(i18niso.getAlpha3TCode('Deutsch', 'xx'), undefined);
    });
  });
  describe('getAlpha3BCode', () => {

    it('missing name', () => {

      assert.equal(i18niso.getAlpha3BCode('XXX', 'de'), undefined);
    });
    it('missing language', () => {

      assert.equal(i18niso.getAlpha3BCode('Deutsch', 'xx'), undefined);
    });
  });
  describe('isValid', () => {

    it('isValid true => false', () => {

      assert.equal(i18niso.isValid(true), false);
    });
    it('isValid XX => false', () => {

      assert.equal(i18niso.isValid('XX'), false);
    });
    it('isValid de => true', () => {

      assert.equal(i18niso.isValid('de'), true);
    });
    it('isValid deu => true', () => {

      assert.equal(i18niso.isValid('deu'), true);
    });
    it('isValid ger => true', () => {

      assert.equal(i18niso.isValid('ger'), true);
    });
    it('isValid xxx => false', () => {

      assert.equal(i18niso.isValid('xxx'), false);
    });
    it('works when isValid is destructured (bugfix, ticket #41 github)', () => {

      const { isValid } = i18niso;
      assert.equal(isValid('ger'), true);
    });
  });
  describe('completeness', () => {

    i18niso.langs().forEach((lang) => {

      describe(`${lang} completeness`, () => {

        it('complete (to less)', () => {

          Object.keys(i18niso.getAlpha2Codes()).forEach((code) => {

            assert.notEqual(
              i18niso.getName(code, lang),
              undefined,
              `missing entry for ${code}`,
            );
          });
        });
        it('complete (too much)', () => {

          Object.keys(i18niso.getNames(lang)).forEach((code) => {

            assert.notStrictEqual(
              i18niso.getAlpha2Codes()[code],
              undefined,
              `entry for ${code} in lang ${lang} is too much`,
            );
          });
        });
      });
    });
  });
  describe('langs', () => {

    describe('de', () => {

      const lang = 'de';
      describe('get name', () => {

        it('for de', () => {

          assert.equal(i18niso.getName('de', lang), 'Deutsch');
        });
        it('for en', () => {

          assert.equal(i18niso.getName('en', lang), 'Englisch');
        });
        it('for EN', () => {

          assert.equal(i18niso.getName('EN', lang), 'Englisch');
        });
        it('for deu', () => {

          assert.equal(i18niso.getName('deu', lang), 'Deutsch');
        });
        it('for af', () => {

          assert.equal(i18niso.getName('ger', lang), 'Deutsch');
        });
      });
    });
    describe('en', () => {

      const lang = 'en';
      describe('get 639-1 (Alpha-2) code', () => {

        it('nameToAlpha2 German => de', () => {

          assert.equal(i18niso.getAlpha2Code('German', lang), 'de');
        });
        it('nameToAlpha2 English => en', () => {

          assert.equal(i18niso.getAlpha2Code('English', lang), 'en');
        });
      });
      describe('get 639-2/T (Alpha-3) code', () => {

        it('nameToAlpha3T English => eng', () => {

          assert.equal(i18niso.getAlpha3TCode('English', lang), 'eng');
        });
        it('nameToAlpha3T German => ger', () => {

          assert.equal(i18niso.getAlpha3TCode('German', lang), 'deu');
        });
      });
      describe('get 639-2/b (Alpha-3) code', () => {

        it('nameToAlpha3b English => eng', () => {

          assert.equal(i18niso.getAlpha3BCode('English', lang), 'eng');
        });
        it('nameToAlpha3b German => ger', () => {

          assert.equal(i18niso.getAlpha3BCode('German', lang), 'ger');
        });
      });
      describe('get name', () => {

        it('for de', () => {

          assert.equal(i18niso.getName('de', lang), 'German');
        });
        it('for em', () => {

          assert.equal(i18niso.getName('en', lang), 'English');
        });
        it('for EN', () => {

          assert.equal(i18niso.getName('EN', lang), 'English');
        });
        it('for deu', () => {

          assert.equal(i18niso.getName('deu', lang), 'German');
        });
        it('for ger', () => {

          assert.equal(i18niso.getName('ger', lang), 'German');
        });
      });
    });
    describe('unsupported language', () => {

      const lang = 'unsupported';
      it('get name', () => {

        assert.equal(i18niso.getName('de', lang), undefined);
      });
      it('get names', () => {

        assert.equal(Object.keys(i18niso.getNames(lang)).length, 0);
      });
    });
  });
  describe('registerLocale', () => {

    it('should throw on missing "locale" property', () => {

      const input = { languages: {} };
      assert.throws(
        () => i18niso.registerLocale(input),
        TypeError,
        'Missing localeData.locale',
      );
    });

    it('should throw on missing "languages" property', () => {

      const input = { locale: 'xx' };
      assert.throws(
        () => i18niso.registerLocale(input),
        TypeError,
        'Missing localeData.languages',
      );
    });
  });
});
