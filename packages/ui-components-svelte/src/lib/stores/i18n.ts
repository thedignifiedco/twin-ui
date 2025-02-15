// Copyright 2024 IOTA Stiftung.
// SPDX-License-Identifier: Apache-2.0.
import { I18n, type ILocale } from "@twin.org/core";
import { derived, get, writable, type Writable } from "svelte/store";
import { persistent } from "../utils/persistent";

/**
 * The locales dictionaries for each code.
 */
export const localeDictionaries: Writable<{ [code: string]: { [key: string]: string } }> = writable(
	{}
);

/**
 * The complete list of locales.
 */
export const locales: Writable<ILocale[]> = writable<ILocale[]>([]);

/**
 * The current locale.
 */
export const currentLocale: Writable<string> = persistent<string>("locale", I18n.DEFAULT_LOCALE);

/**
 * The active locale.
 */
export const activeLocale: Writable<string> = writable<string>(I18n.DEFAULT_LOCALE);

/**
 * The root url for the app.
 */
let root: URL | undefined;

/**
 * Load the locales.
 * @param rootUrl The root URL.
 * @param localesIndex The locales index.
 * @param debugLanguages Should we load the debug languages.
 */
export async function initLocales(
	rootUrl: URL,
	localesIndex: ILocale[],
	debugLanguages: boolean
): Promise<void> {
	root = rootUrl;

	currentLocale.subscribe(async locale => {
		await loadTranslation(locale);
		activeLocale.set(locale);
	});

	locales.set(localesIndex);

	if (debugLanguages) {
		locales.update(loadedLocales => {
			loadedLocales.push(
				{
					label: "Debug - Keys",
					code: "debug-k"
				},
				{
					label: "Debug - Xxx",
					code: "debug-x"
				}
			);

			return loadedLocales;
		});
	}

	await loadTranslation(get(currentLocale));
}

currentLocale.subscribe(async locale => {
	await loadTranslation(locale);
	I18n.setLocale(locale);
});

/**
 * Load a translation for a locale.
 * @param locale The locale to load.
 */
async function loadTranslation(locale: string): Promise<void> {
	let loadLocale = locale;
	if (locale.startsWith("debug-")) {
		loadLocale = I18n.DEFAULT_LOCALE;
	}

	const tl = get(localeDictionaries);
	if (!tl[loadLocale] && root) {
		try {
			const jsonResponse = await globalThis.fetch(`${root.origin}/locales/${loadLocale}.json`);

			I18n.addDictionary(loadLocale, await jsonResponse.json());
		} catch (err) {
			// eslint-disable-next-line no-console
			console.error(err);
		}
	}
}

I18n.addDictionaryHandler("store", () => {
	localeDictionaries.set(I18n.getAllDictionaries());
});

/**
 * Format the message.
 */
export const i18n = derived([localeDictionaries, activeLocale], () => I18n.formatMessage);
