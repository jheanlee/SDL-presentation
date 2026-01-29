import { Button } from "@/components/ui/button.tsx";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router";
import { paths } from "@/config/paths.ts";
import { useTheme } from "@/components/theme/theme-provider.tsx";

export const Home = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { theme } = useTheme();

  return (
    <div className="w-full h-full">
      <div className="grid gap-20 mt-40 mb-30 text-3xl md:text-4xl text-stone-700 dark:text-stone-300 justify-items-center text-center break-keep">
        <h1 className="whitespace-pre-wrap">{t("home.title")}</h1>
        <div className="flex flex-col md:flex-row gap-5">
          <Button
            variant="secondary"
            className="w-[200px] cursor-pointer"
            onClick={() => navigate(paths.root.articleSearch.getHref())}
          >
            {t("home.browse_works")}
          </Button>
        </div>
      </div>
      <div className="relative w-full overflow-hidden">
        {theme === "light" && (
          <img
            src="/images/poster_light.png"
            className="absolute inset-0 -z-10 w-full h-full object-cover grayscale-30 brightness-120 blur-md"
          />
        )}
        {theme === "dark" && (
          <img
            src="/images/poster_dark.png"
            className="absolute inset-0 -z-10 w-full h-full object-cover brightness-40 max-h-300 blur-sm"
          />
        )}
        <div className="relative flex items-center justify-center p-8">
          <div className="flex flex-col w-4/5 gap-8 md:gap-20 my-8 md:my-30 text-md md:text-lg text-stone-600 dark:text-stone-400 text-justify">
            <p>{t("home.theme_description0")}</p>
            <p>{t("home.theme_description1")}</p>
            <p>{t("home.theme_description2")}</p>
            <p>{t("home.theme_description3")}</p>
            <p>{t("home.theme_description4")}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
