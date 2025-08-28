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

export type BeltGrade = {
  id: string;
  degree: string; // es: "1st Dan", "8th Kup"
  name: string; // es: "White Belt", "Cintura Bianca"
  colors: string[]; // array di nomi o codici hex, ma coerente!
};

export type HistoryStudent = {
  id: string;
  personalInfo: PersonalInfo;
  beltGrade: BeltGrade;
  yearsOfPractice: number;
  description: string;
};
