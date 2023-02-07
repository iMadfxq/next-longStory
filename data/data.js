const posts = [
  {
    period: "0 to 7",
    stageDescription: "A baby, no conciosness",
    highlights: [
      {
        definedColor: "orange",
        definedValue: "Responsability",
        valueImg: "/",
        definedSkill: "Organization",
        skillImg: "/",
      },
    ],
    proudThings: ["Bla", "bla", "bla"],
    id: 0,
  },
  {
    period: "8 to 15",
    stageDescription: "A teen, no freedom",
    highlights: [
      {
        definedColor: "blue",
        definedValue: "Independence",
        valueImg: "/",
        definedSkill: "Autonomy",
        skillImg: "/",
      },
    ],
    proudThings: ["Bla", "bla", "bla"],
    id: 1,
  },
  {
    period: "16 to 19",
    stageDescription: "An adult, unstoppable",
    highlights: [
      {
        definedColor: "black",
        definedValue: "Congruence",
        valueImg: "/",
        definedSkill: "Learning",
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
