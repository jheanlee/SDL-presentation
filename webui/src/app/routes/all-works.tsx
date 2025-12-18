import { useTranslation } from "react-i18next";

export const AllWorks = () => {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col gap-3 pl-3">
      <h1 className="text-3xl pb-2 text-stone-700 dark:text-stone-300">{t("home.all_works")}</h1>
    </div>
  );
};
