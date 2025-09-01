/**
 * Standardized belt colors (hex)
 */
export const BELT_COLORS = {
  WHITE: "#FFFFFF",
  YELLOW: "#F5D042",
  GREEN: "#34D399",
  BLUE: "#3B82F6",
  RED: "#EF4444",
  BLACK: "#000000",
} as const;

export type BeltGrade = {
  id: string;
  degree: string; // es: "1st Dan", "8th Kup"
  name: string; // es: "White Belt", "Cintura Bianca"
  colors: string[]; // array di nomi o codici hex, ma coerente!
};

export const beltGrades: BeltGrade[] = [
  {
    id: "10-Kup",
    degree: "10th Kup",
    name: "Cintura Bianca",
    colors: [BELT_COLORS.WHITE],
  },
  {
    id: "9-Kup",
    degree: "9th Kup",
    name: "Cintura Bianca Superiore",
    colors: [BELT_COLORS.WHITE, BELT_COLORS.YELLOW],
  },
  {
    id: "8-Kup",
    degree: "8th Kup",
    name: "Cintura Gialla",
    colors: [BELT_COLORS.YELLOW],
  },
  {
    id: "7-Kup",
    degree: "7th Kup",
    name: "Cintura Gialla Superiore",
    colors: [BELT_COLORS.YELLOW, BELT_COLORS.GREEN],
  },
  {
    id: "6-Kup",
    degree: "6th Kup",
    name: "Cintura Verde",
    colors: [BELT_COLORS.GREEN],
  },
  {
    id: "5-Kup",
    degree: "5th Kup",
    name: "Cintura Verde Superiore",
    colors: [BELT_COLORS.GREEN, BELT_COLORS.BLUE],
  },
  {
    id: "4-Kup",
    degree: "4th Kup",
    name: "Cintura Blu",
    colors: [BELT_COLORS.BLUE],
  },
  {
    id: "3-Kup",
    degree: "3rd Kup",
    name: "Cintura Blu Superiore",
    colors: [BELT_COLORS.BLUE, BELT_COLORS.RED],
  },
  {
    id: "2-Kup",
    degree: "2nd Kup",
    name: "Cintura Rossa",
    colors: [BELT_COLORS.RED],
  },
  {
    id: "1-Kup",
    degree: "1st Kup",
    name: "Cintura Rossa Superiore",
    colors: [BELT_COLORS.RED, BELT_COLORS.BLACK],
  },

  // Dan (black belt) — manteniamo lo stesso name ma degree differente
  {
    id: "1-Dan",
    degree: "1st Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "2-Dan",
    degree: "2nd Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "3-Dan",
    degree: "3rd Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "4-Dan",
    degree: "4th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "5-Dan",
    degree: "5th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "6-Dan",
    degree: "6th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "7-Dan",
    degree: "7th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "8-Dan",
    degree: "8th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
  {
    id: "9-Dan",
    degree: "9th Dan",
    name: "Cintura Nera",
    colors: [BELT_COLORS.BLACK],
  },
];