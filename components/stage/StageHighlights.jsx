import HighlightItem from "./HighlightItem"

export default function StageHighlights({highlights}) {
  return (
    <section>
      <HighlightItem title={'Color: '} description={highlights.definedColor} color={highlights.definedColor}  />
      <HighlightItem title={'Skill: '} description={highlights.definedSkill} image={highlights.skillImage} />
      <HighlightItem title={'Value: '} description={highlights.definedValue} image={highlights.valueImg} />
    </section>
  )
}