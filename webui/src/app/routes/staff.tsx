import { StaffItem } from "@/components/list-item/staff-item.tsx";

export const Staff = () => {
  const group: string[] = ['coordinator', 'music', 'performance', 'photograph', 'decoration', 'media', 'design'];

  return (
    <div className="w-full h-full p-10 break-keep">
      <div>
        {group.map((item, index) => (
          <StaffItem group={item} key={index}/>
        ))}
      </div>
    </div>
  );
};
