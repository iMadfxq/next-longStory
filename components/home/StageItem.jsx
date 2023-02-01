import Image from "next/image"
import Link from "next/link"

export default function StageItem({stage}) {
  return (
    <Link href={`/stage/${stage.period.replace(/\s+/g, '-').toLowerCase()}`}>
    
    <article>
      <div>
        <Image></Image>
      </div>
      <div>
        <h3>{stage.period}</h3>
        <p>{stage.stageDescription}</p>
      </div>
    </article>
    </Link>
  )
}