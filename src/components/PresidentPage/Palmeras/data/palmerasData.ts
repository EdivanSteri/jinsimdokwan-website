import type { Palmeras } from "./palmerasTypes";

// --- Utility: map position -> color ---
const getColorByPosition = (pos: 1 | 2 | 3): "gold" | "silver" | "bronze" =>
  pos === 1 ? "gold" : pos === 2 ? "silver" : "bronze";

// Palmeras array
export const palmerasData: Palmeras[] = [
  // 2023 European Championship | Romania
  {
    year: 2023,
    rankingPosition: 2,
    competitionName: "European Championship",
    venue: { country: "Romania", city: "Bucharest" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(2),
  },

  // 2022 World Cup | Slovenia
  {
    year: 2022,
    rankingPosition: 3,
    competitionName: "World Cup",
    venue: { country: "Slovenia", city: "Ljubljana" },
    category: {
      type: "sparring",
      category: "Traditional",
      weight: "-50 kg",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(3),
  },
  {
    year: 2022,
    rankingPosition: 3,
    competitionName: "World Cup",
    venue: { country: "Slovenia", city: "Ljubljana" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(3),
  },

  // 2022 European Championship | Croatia
  {
    year: 2022,
    rankingPosition: 1,
    competitionName: "European Championship",
    venue: { country: "Croatia", city: "Zagreb" },
    category: {
      type: "sparring",
      category: "Traditional",
      weight: "-50 kg",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(1),
  },
  {
    year: 2022,
    rankingPosition: 1,
    competitionName: "European Championship",
    venue: { country: "Croatia", city: "Zagreb" },
    category: {
      type: "pattern",
      category: "Team",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(1),
  },
  {
    year: 2022,
    rankingPosition: 3,
    competitionName: "European Championship",
    venue: { country: "Croatia", city: "Zagreb" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(3),
  },

  // 2021 European Championship | La Nucia
  {
    year: 2021,
    rankingPosition: 2,
    competitionName: "European Championship",
    venue: { country: "Spain", city: "La Nucia" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "IV-VI Dan",
    },
    color: getColorByPosition(2),
  },

  // 2019 European Championship | Sarajevo
  {
    year: 2019,
    rankingPosition: 2,
    competitionName: "European Championship",
    venue: { country: "Bosnia and Herzegovina", city: "Sarajevo" },
    category: {
      type: "pattern",
      category: "Team",
      age: "Senior",
      gender: "Female",
      rank: "III Dan",
    },
    color: getColorByPosition(2),
  },
  {
    year: 2019,
    rankingPosition: 3,
    competitionName: "European Championship",
    venue: { country: "Bosnia and Herzegovina", city: "Sarajevo" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "III Dan",
    },
    color: getColorByPosition(3),
  },

  // 2017 World Championship | Barneveld
  {
    year: 2017,
    rankingPosition: 1,
    competitionName: "World Championship",
    venue: { country: "Netherlands", city: "Barneveld" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "III Dan",
    },
    color: getColorByPosition(1),
  },
  {
    year: 2017,
    rankingPosition: 2,
    competitionName: "World Championship",
    venue: { country: "Netherlands", city: "Barneveld" },
    category: {
      type: "sparring",
      category: "Individual",
      weight: "-50 kg",
      age: "Senior",
      gender: "Female",
      rank: "III Dan",
    },
    color: getColorByPosition(2),
  },

  // 2015 World Championship | Rimini
  {
    year: 2015,
    rankingPosition: 1,
    competitionName: "World Championship",
    venue: { country: "Italy", city: "Rimini" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Senior",
      gender: "Female",
      rank: "III Dan",
    },
    color: getColorByPosition(1),
  },
  {
    year: 2015,
    rankingPosition: 2,
    competitionName: "World Championship",
    venue: { country: "Italy", city: "Rimini" },
    category: {
      type: "sparring",
      category: "Individual",
      weight: "-50 kg",
      age: "Senior",
      gender: "Female",
      rank: "III Dan",
    },
    color: getColorByPosition(2),
  },

  // 2008 European Championship | Sardinia
  {
    year: 2008,
    rankingPosition: 1,
    competitionName: "European Championship",
    venue: { country: "Italy", city: "Sardinia" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Junior",
      gender: "Female",
      rank: "II Dan",
    },
    color: getColorByPosition(1),
  },

  // 2006 European Championship | Wetzlar
  {
    year: 2006,
    rankingPosition: 1,
    competitionName: "European Championship",
    venue: { country: "Germany", city: "Wetzlar" },
    category: {
      type: "pattern",
      category: "Individual",
      age: "Junior",
      gender: "Female",
      rank: "I Dan",
    },
    bestPlayer: true,
    color: getColorByPosition(1),
  },
  {
    year: 2006,
    rankingPosition: 1,
    competitionName: "European Championship",
    venue: { country: "Germany", city: "Wetzlar" },
    category: {
      type: "sparring",
      category: "Individual",
      weight: "-50 kg",
      age: "Junior",
      gender: "Female",
      rank: "I Dan",
    },
    bestPlayer: true,
    color: getColorByPosition(1),
  },
];
