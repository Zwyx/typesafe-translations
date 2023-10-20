import { I18nLocale } from "./en";

export const fr: I18nLocale = {
	app: {
		intellisense:
			"Intellisense est disponible dans les fichiers de traduction et le code ",
		learnMoreAt: "Plus d'info à",
		oneLanguage: "Une des langue est la référence pour les types ",
		typoInCode: "Une erreur dans le code est aussi détectée tout de suite ",
		typoInOtherLanguage:
			"Une erreur ou une traduction manquante dans une autre langue est détectée tout de suite ",
	},

	languageSelector: {
		chooseLanguage: "Choisir la langue",
	},

	siteHeader: {
		typesafeTranslations: "Traductions typées",
	},

	themeSelector: {
		chooseTheme: "Choisir le thème",
		dark: "Foncé",
		light: "Clair",
		sameAsDevice: "Identique à l'appareil",
	},
} as const;
