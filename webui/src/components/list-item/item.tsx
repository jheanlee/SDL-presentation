import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { NavLink } from "react-router";
import { paths } from "@/config/paths.ts";
import { Separator } from "@/components/ui/separator.tsx";

interface Props {
  group: string;
}

export const Item = ({ group }: Props) => {
  const { t } = useTranslation();
  return (
    <ul>
      <li>
        <NavLink to={paths.root.home.getHref()}>
          <Button
            className="flex flex-col h-35 w-full mb-2 cursor-pointer items-start"
            variant="secondary"
          >
            <div>
              <h1 className="font-bold text-2xl text-left justify-items-left">
                {t(`presentation.${group}.items.1`)}
              </h1>
              <h2 className="font-bold text-base text-left justify-items-left">Author:</h2>
            </div>
            <Separator />
            <p className="text-sm text-left justify-items-left">
              {t(`presentation.${group}.articles.1`)}
            </p>
          </Button>
        </NavLink>
      </li>
    </ul>
  );
};
