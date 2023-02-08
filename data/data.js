const posts = [
  {
    period: "0 to 7",
    stageDescription: "A baby, no conciosness",
    highlights: {
      definedColor: "orange",
      definedValue: "Responsability",
      valueImg: "/",
      definedSkill: "Organization",
      skillImg: "/",
    },

    proudThings: [
      "Taking responsabiity right after getting out from the hospital. It didn't matter I was sick, I was the one who had to do my homework, It was my responsability.",
      "I learned how to be a gentleman, surrounded by women, learned how to treat them right.",
      "I started to go out by myself, getting to know the streets, becoming more and more confident with life.",
    ],
    id: 0,
  },
  {
    period: "8 to 15",
    stageDescription: "A teen, no direction",
    highlights: [
      {
        definedColor: "blue",
        definedValue: "Independence",
        valueImg: "/",
        definedSkill: "Autonomy",
        skillImg: "/",
      },
    ],
    proudThings: [
      "Finally received direct approval for me to go out and explore the world. Things needed to be done, and I had to go out and do them.",
      "My aunt (adoptive mom) while I was growing, she was getting older and older, I had to evolve and take care of her, she had taken care of me, now I needed to take care of her.",
      "Thanks to me beeing the best student in my class, I got a scholarship to study English, something that would give a great boost to my life.",
    ],
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
    proudThings: [
      "Gave more importance to the Internet, allowing me to grow inmensely thanks to the unlimited amounts of knowledge I was able to get from it",
      "Realized I had no value, and that if I wanted to get the things I desired, I will need to start improving my life",
      "Started constantly exercising, reading; found the path I would follow in my life; became an student for life, an student of things that added value to the world.",
    ],
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
