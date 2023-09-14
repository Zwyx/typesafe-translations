import { useTranslation } from "react-i18next";
import i18n1 from "./1.jpg";
import i18n2 from "./2.jpg";
import i18n3 from "./3.jpg";
import i18n4 from "./4.jpg";
import i18n5 from "./5.jpg";
import { SiteHeader } from "./components/SiteHeader";

export const App = () => {
	const { t } = useTranslation(["app"]);

	return (
		<div className="flex flex-col items-center">
			<SiteHeader />

			<div className="mt-10 p-4">
				<ul>
					<li>• {t("oneLanguage")}:</li>

					<img
						className="mx-auto my-3 rounded"
						src={i18n1}
						alt={"oneLanguage"}
					/>

					<li className="mt-8">• {t("typoInOtherLanguage")}:</li>

					<img
						className="mx-auto my-3 rounded"
						src={i18n2}
						alt={t("typoInOtherLanguage")}
					/>

					<li className="mt-8">• {t("typoInCode")}:</li>

					<img
						className="mx-auto my-3 rounded"
						src={i18n3}
						alt={t("typoInCode")}
					/>

					<li className="mt-8">• {t("intellisense")}:</li>

					<img
						className="mx-auto my-3 rounded"
						src={i18n4}
						alt={t("intellisense")}
					/>

					<img
						className="mx-auto mb-3 mt-5 rounded"
						src={i18n5}
						alt={t("intellisense")}
					/>
				</ul>

				<div className="mt-8 text-center">
					{t("learnMoreAt")}{" "}
					<a
						href="https://zwyx.dev/blog/typesafe-translations"
						target="_blank"
						rel="noreferrer"
					>
						{"zwyx.dev/blog/typesafe-translations"}
					</a>
				</div>
			</div>
		</div>
	);
};
