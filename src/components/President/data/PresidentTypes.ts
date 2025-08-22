export type BaseInstructorItem = {
  id: string | number;
  icon: React.ElementType;
  title: string;
  subTitle: string;
};

export type InstructorHighlight = BaseInstructorItem & {
  kind: "highlight";
  iconBgColor?: string;
};

export type InstructorSpeciality = BaseInstructorItem & {
  kind: "speciality";
};

export type InstructorItem = InstructorHighlight | InstructorSpeciality;
