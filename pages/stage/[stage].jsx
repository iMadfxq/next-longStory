import Contact from "@/components/stage/Contact";
import HomeButton from "@/components/stage/HomeButton";
import Milestones from "@/components/stage/Milestones";
import StageHero from "@/components/stage/StageHero";
import StageHighlights from "@/components/stage/StageHighlights";
import StageNavigation from "@/components/stage/StageNavigation";
import {
  getAllStages,
  getSpecificStage,
  getSpecificStageById,
  getSpecificStageByPeriod,
  getStagesIds,
  getStagesPeriod,
} from "@/data/data";

export function getStaticPaths() {
  const allSlugs = getStagesPeriod();
  const paths = allSlugs.map((slug) => ({
    params: { stage: slug.replace(/\s+/g, "-").toLowerCase() },
  }));
  return {
    paths,
    fallback: false,
  };
}

export function getStaticProps(context) {
  const { stage } = context.params;

  const fullStageObject = getSpecificStageByPeriod(stage.replace(/-/g, " "));

  const numberOfStages = getAllStages().length;

  let nextStage = 1;
  let prevStage = 1;

  if (fullStageObject.id < numberOfStages - 1) {
    const nextStageObj = getSpecificStageById(fullStageObject.id + 1);
    nextStage = nextStageObj.period.replace(/\s+/g, "-").toLowerCase();
  }

  if (fullStageObject.id !== 0) {
    const prevStageObj = getSpecificStageById(fullStageObject.id - 1);
    prevStage = prevStageObj.period.replace(/\s+/g, "-").toLowerCase();
  }

  return {
    props: {
      postData: fullStageObject,
      currentStageId: fullStageObject.id,
      numberOfStages,
      nextStage: nextStage,
      prevStage: prevStage,
    },
  };
}

function Stage({
  postData,
  currentStageId,
  numberOfStages,
  nextStage,
  prevStage,
}) {
  return (
    <>
      <StageHero title={postData.period} stageImage={postData.periodImg} />
      <StageHighlights highlights={postData.highlights} />
      <Milestones proudThings={postData.proudThings} />
      <StageNavigation
        currentStageId={currentStageId}
        numberOfStages={numberOfStages}
        nextStage={nextStage}
        prevStage={prevStage}
      />
      {currentStageId == numberOfStages - 1 && <Contact />}
      <HomeButton />
    </>
  );
}

export default Stage;
