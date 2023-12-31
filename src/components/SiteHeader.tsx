import { cn } from "@/lib/utils";
import { LucideArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { LanguageSelector } from "./LanguageSelector";
import { ThemeSelector } from "./ThemeSelector";

export const SiteHeader = () => {
	const { t } = useTranslation(["siteHeader"]);
	const [bouncingArrowVisible, setBouncingArrowVisible] = useState(false);

	useEffect(() => {
		setTimeout(() => setBouncingArrowVisible(true), 500);
	}, []);

	return (
		<header className="supports-backdrop-blur:bg-background/60 sticky top-0 z-40 w-full border-b bg-background/95 shadow-sm backdrop-blur">
			<div className="container flex h-14 items-center gap-4 p-6">
				<div className="min-w-[32px] flex-1">
					<img src="Zwyx-220x220-rounded.png" width={32} alt="Zwyx" />
				</div>

				<span className="flex-[10] text-center font-bold">
					{t("typesafeTranslations")}
				</span>

				<nav className="flex flex-1 items-center justify-end gap-1">
					<LucideArrowRight
						className={cn(
							"animate-bounce-x transition-opacity duration-300",
							!bouncingArrowVisible && "opacity-0",
						)}
					/>

					<LanguageSelector
						onOpenChange={() => setBouncingArrowVisible(false)}
					/>
					<ThemeSelector />
				</nav>
			</div>
		</header>
	);
};
