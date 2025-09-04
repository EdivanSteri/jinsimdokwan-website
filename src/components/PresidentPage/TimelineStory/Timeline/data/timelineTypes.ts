import type { BeltGrade } from "../../../../../utils/beltGradeUtils";


export type TimelineCard = {
  id: string;
  data: {
    icon: React.ElementType;
    color: string
    title: string;
    year: number;
    age: number;
    description: string;
    beltGrade?: BeltGrade;
  };
};
