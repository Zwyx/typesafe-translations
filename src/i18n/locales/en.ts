import { DeepReplace } from "@/lib/utils";

export const en = {
	app: {
		intellisense:
			"Intellisense is available in the translation files and in the code",
		learnMoreAt: "Learn more at",
		oneLanguage: 'One language is the "source of truth" for the types',
		typoInCode: "A typo in the code is also detected immediately",
		typoInOtherLanguage:
			"A typo or a missing translation in another language is detected immediately",
	},

	languageSelector: {
		chooseLanguage: "Choose language",
	},

	siteHeader: {
		typesafeTranslations: "Typesafe Translations",
	},

	themeSelector: {
		chooseTheme: "Choose theme",
		dark: "Dark",
		light: "Light",
		sameAsDevice: "Same as device",
	},
} as const;

export type I18nLocale = DeepReplace<typeof en, [string, string]>;
