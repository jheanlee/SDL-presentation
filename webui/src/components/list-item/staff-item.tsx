import { useTranslation } from "react-i18next";
import { Separator } from "@/components/ui/separator"

interface groupProps {
  group: string;
}

export const StaffItem = ({ group }: groupProps) => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col gap-2 break-keep text-justify">
      <h1 className="text-lg">{t(`staff.${group}_group.title`)}</h1>
      <div className="ml-4">
          <div className="text-sm">{group === 'coordinator' ? t(`staff.coordinator_group.leader.title`) :  t(`staff.group.leader.title`)}</div>
          <div className="ml-2 text-md">{t(`staff.${group}_group.leaders`)}</div>
          <div className="text-sm mt-2">{t(`staff.group.members.title`)}</div>
          <div className="ml-2 text-md">{t(`staff.${group}_group.members`)}</div>
      </div>
      <Separator className="my-4"/>
    </div>
  );
};
