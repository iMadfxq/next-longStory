import Image from "next/image"
import Link from "next/link"
import Pic from "../../public/images/placeholder.jpeg"

export default function StageItem({stage}) {
  return (
    <Link href={`/stage/${stage.period.replace(/\s+/g, '-').toLowerCase()}`}>
    
    <article>
      <div>
        <Image src={stage.periodImg} width={200} ></Image>
      </div>
      <div>
        <h3>{stage.period}</h3>
        <p>{stage.stageDescription}</p>
      </div>
    </article>
    </Link>
  )
}