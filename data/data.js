const posts = [
  {
    period: "0 to 7",
    stageDescription: "A baby, no conciosness",
    highlights: [
      {
        definedColor: "blue",
        definedValue: "Responsability",
        valueImg: "/",
        definedSkill: "Manipulation",
        skillImg: "/",
      },
    ],
    proudThings: ["Bla", "bla", "bla"],
    id: 0,
  },
  {
    period: "8 to 15",
    stageDescription: "A baby, no conciosness",
    highlights: [
      {
        definedColor: "blue",
        definedValue: "Responsability",
        valueImg: "/",
        definedSkill: "Manipulation",
        skillImg: "/",
      },
    ],
    proudThings: ["Bla", "bla", "bla"],
    id: 1,
  },
  {
    period: "15 to 19",
    stageDescription: "A baby, no conciosness",
    highlights: [
      {
        definedColor: "blue",
        definedValue: "Responsability",
        valueImg: "/",
        definedSkill: "Manipulation",
        skillImg: "/",
      },
    ],
    proudThings: ["Bla", "bla", "bla"],
    id: 2,
  },
];

export function getAllStages() {
  return posts;
}

export function getStagesIds() {
  return posts.map((post) => post.id);
}

export function getStagesPeriod() {
  return posts.map((post) => post.period);
}

export function getSpecificStageById(stageId) {
  return posts.find((post) => post.id == stageId);
}

export function getSpecificStageByPeriod(periodText) {
  return posts.find((post) => post.period == periodText);
}
