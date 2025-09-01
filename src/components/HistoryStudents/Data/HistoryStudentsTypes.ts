import type { BeltGrade } from "../../../utils/beltGradeUtils";

export type PersonalImage = {
  url: string;
  altText?: string;
};

export type PersonalInfo = {
  id: string;
  name: string;
  surname: string;
  persomalImage: PersonalImage;
};

export type HistoryStudent = {
  id: string;
  personalInfo: PersonalInfo;
  beltGrade: BeltGrade;
  yearsOfPractice: number;
  description: string;
};
