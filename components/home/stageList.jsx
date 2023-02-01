import StageItem from "./StageItem";

export default function StageList({stages}) {
  return (
    <>
    
    {stages.map(stage => <StageItem stage={stage} />)}
    </>
  )
}