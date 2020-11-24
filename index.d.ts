export type LocalizedLanguageNames = {
  [alpha2Key: string]: string
};

export type LocaleData = {
  locale: string,
  languages: LocalizedLanguageNames
};

export function registerLocale(localeData: LocaleData): void;
export function alpha2ToAlpha3T(alpha2: string): string | undefined;
export function alpha2ToAlpha3B(alpha2: string): string | undefined;
export function alpha3TToAlpha2(alpha3: string): string | undefined;
export function alpha3BToAlpha2(alpha3: string): string | undefined;
/**
 * Returns object map where key is alpha 2 code and value is alpha 3 code
 */
export function getAlpha2Codes(): { [alpha2Key: string]: string };
/**
 * Returns object map where key is alpha 3 code and value is alpha 2 code
 */
export function getAlpha3TCodes(): { [alpha3Key: string]: string };
export function getAlpha3BCodes(): { [alpha3Key: string]: string };
/**
 * Returns object map where key is numeric code and value is alpha 2 code
 */
export function getName(alpha2orAlpha3: string, lang: string): string | undefined;
export function getNames(lang: string): LocalizedLanguageNames;
export function toAlpha3T(alpha2: string): string | undefined;
export function toAlpha3B(alpha2: string): string | undefined;
export function toAlpha2(alpha3: string): string | undefined;
export function getAlpha2Code(name: string, lang: string): string | undefined;
export function getAlpha3TCode(name: string, lang: string): string | undefined;
export function getAlpha3BCode(name: string, lang: string): string | undefined;
export function langs(): string[];
export function isValid(alpha2orAlpha3: string): boolean;
