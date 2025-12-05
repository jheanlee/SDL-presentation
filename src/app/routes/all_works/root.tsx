import { useParams } from "react-router";

export const WorkWrapper = () => {
  const path = useParams();
  switch (path.workType) {
    case "biology":
      return Work({ workType: "biology" });
    case "chemistry":
      return Work({ workType: "chemistry" });
    case "engineering":
      return Work({ workType: "engineering" });
    case "medicine":
      return Work({ workType: "medicine" });
    case "politics_and_economics":
      return Work({ workType: "politics_and_economics" });
    case "society":
      return Work({ workType: "society" });
    default:
      return <></>;
  }
};

export interface WorkProp {
  workType:
    | "biology"
    | "chemistry"
    | "engineering"
    | "medicine"
    | "politics_and_economics"
    | "society";
}

export const Work = ({ workType }: WorkProp) => {
  return <h1>{workType.charAt(0).toUpperCase() + workType.slice(1)}</h1>;
};
