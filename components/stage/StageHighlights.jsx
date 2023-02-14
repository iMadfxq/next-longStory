import HighlightItem from "./HighlightItem"
import Classes from './StageHighlights.module.css'

export default function StageHighlights({highlights}) {
  return (
    <section className={Classes.container}>
      <HighlightItem title={'Color: '} description={highlights.definedColor} color={highlights.definedColor}  />
      <HighlightItem title={'Skill: '} description={highlights.definedSkill} image={highlights.skillImg} />
      <HighlightItem title={'Value: '} description={highlights.definedValue} image={highlights.valueImg} />
    </section>
  )
}