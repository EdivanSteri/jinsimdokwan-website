// Venue information
type CompetitionVenue = {
  country: string; // e.g., Italy
  city: string; // e.g., Milan
};

// Colored belt ranks (Kup) in Roman numerals
type KupNumeral =
  | "X"
  | "IX"
  | "VIII"
  | "VII"
  | "VI"
  | "V"
  | "IV"
  | "III"
  | "II"
  | "I";

// Black belt ranks (Dan) in Roman numerals
type DanNumeral =
  | "I"
  | "II"
  | "III"
  | "IV"
  | "V"
  | "VI"
  | "VII"
  | "VIII"
  | "IX";

// Single Kup or Dan
type KupRank = `${KupNumeral} Kup`;
type DanRank = `${DanNumeral} Dan`;

// Ranges (e.g., "IV-V Dan", "X-IX Kup")
type KupRange = `${KupNumeral}-${KupNumeral} Kup`;
type DanRange = `${DanNumeral}-${DanNumeral} Dan`;

// Union of all possible ranks
export type Rank = KupRank | DanRank | KupRange | DanRange;

// Base categories
type BaseCategory = "Individual" | "Team";

// Pattern categories
type PatternCategory = BaseCategory;

// Sparring categories
type SparringCategory = BaseCategory | "Traditional";

// Age divisions
type AgeDivision = "Junior" | "Senior" | "Veteran";

// Gender
type Gender = "Male" | "Female";

// Weight category (e.g., "-50 kg", "+80 kg")
type WeightCategory = `${"-"}${number} kg`;

// ----------------------
// Categories definitions
// ----------------------

interface PatternCategoryDetail {
  type: "pattern";
  category: PatternCategory;
  age: AgeDivision;
  gender: Gender;
  rank: Rank;
}

interface SparringCategoryDetail {
  type: "sparring";
  category: SparringCategory;
  weight: WeightCategory;
  age: AgeDivision;
  gender: Gender;
  rank: Rank;
}

type Category = PatternCategoryDetail | SparringCategoryDetail;

// Palmeras (Results)
export type Palmeras = {
  year: number;
  rankingPosition: 1 | 2 | 3;
  podium?: boolean;
  competitionName: string;
  venue: CompetitionVenue;
  category: Category;
  bestPlayer?: boolean;
  color: "gold" | "silver" | "bronze";
};
