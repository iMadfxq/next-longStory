import StageHero from "@/components/stage/StageHero"
import StageHighlights from "@/components/stage/StageHighlights"
import { getAllStages, getSpecificStage, getSpecificStageByPeriod, getStagesIds, getStagesPeriod } from "@/data/data"

export function getStaticPaths() {
  const allSlugs = getStagesPeriod()
  const paths = allSlugs.map(slug => ({params: {stage: slug.replace(/\s+/g, '-').toLowerCase()}}))
  return {
    paths,
    fallback: false
  }
}

export function getStaticProps(context) {
  const {stage} = context.params

  const fullStageObject = getSpecificStageByPeriod(stage.replace(/-/g, ' '))

  
  return {
    props: {postData: fullStageObject}
  }
}


function Stage({postData}) {
  return (
    <>
      <StageHero title={postData.period} />
      <StageHighlights />
    </>
  )
}

export default Stage