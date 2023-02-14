import StageItem from "./StageItem";
import Classes from './StageList.module.css'

export default function stageList({stages}) {
  return (
    <section className={Classes.container}>
    
    {stages.map((stage,i) => <StageItem key={i} stage={stage} />)}
    </section>
  )
}