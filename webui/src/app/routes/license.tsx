import { Separator } from "@/components/ui/separator.tsx";
import { useTranslation } from "react-i18next";

export const License = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full h-full p-10 break-keep">
      <div className="w-full flex flex-col gap-2">
        <p className="text-lg">{t("license.frontend")}</p>
        <p className="ml-4">{t("license.frontend.members")}</p>
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-lg">{t("license.backend")}</p>
        <p className="ml-4">{t("license.backend.members")}</p>
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-lg">{t("license.illustration")}</p>
        <p className="ml-4">{t("license.illustration.members")}</p>
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-lg">{t("license.text_zh")}</p>
        <p className="ml-4">{t("license.text_zh.members")}</p>
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-lg">{t("license.text_en")}</p>
        <p className="ml-4">{t("license.text_en.members")}</p>
      </div>
      <Separator className="my-4" />
      <div className="w-full flex flex-col gap-2">
        <p className="text-lg">{t("license.text_jp")}</p>
        <p className="ml-4">{t("license.text_jp.members")}</p>
      </div>
      <div className="w-full flex flex-col mt-8 md:mt-30 pb-10">
        <p className="text-sm">
          The summaries, presentations, slides, documents, images, videos, and
          other works presented on this website are the intellectual property of
          their respective authors and are not covered by the license of this
          website. No reproduction or redistribution of these works is permitted
          without permission from the original authors.
        </p>
        <Separator className="my-4" />
        <p className="text-sm">
          The source code of this website is free software, licensed under the
          GNU Affero General Public License version 3.0 (AGPL-3.0). The AGPL
          license applies only to the website’s source code, not to the content
          displayed on the website.
        </p>
        <p className="text-sm">
          You may obtain the source code at:
          <a
            className="underline ml-1"
            href="https://github.com/wghs-sdl-2026/sdl-website"
          >
            https://github.com/wghs-sdl-2026/sdl-website
          </a>
        </p>
        <p className="text-sm mt-2">
          Frontend: Copyright (C) 2025 LIN-YING-HAO, Jhe-An Lee
        </p>
        <p className="text-sm">Backend: Copyright (C) 2025 Jhe-An Lee</p>
        <p className="text-sm">
          Individual copyright of code contributions belongs to their respective
          authors as recorded in the Git repository.
        </p>
      </div>
    </div>
  );
};
