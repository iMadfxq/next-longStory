import Image from "next/image"
import Link from "next/link"
import Pic from "../../public/images/placeholder.jpeg"
import Classes from './StageItem.module.css'


export default function StageItem({stage}) {
  return (
    <>
    <Link href={`/stage/${stage.period.replace(/\s+/g, '-').toLowerCase()}`}>
    
    <article className={Classes.container}>
      <div>
        <Image src={stage.periodImg} width={200} alt={stage.period}></Image>
      </div>
      <div className={Classes.text}>
        <h3>{stage.period}</h3>
        <p>{stage.stageDescription}</p>
      </div>
    </article>
    </Link>
    </>
  )
}