import StageItem from "./StageItem";
import Classes from './stageList.module.css'

export default function StageList({stages}) {
  return (
    <section className={Classes.container}>
    
    {stages.map((stage,i) => <StageItem key={i} stage={stage} />)}
    </section>
  )
}