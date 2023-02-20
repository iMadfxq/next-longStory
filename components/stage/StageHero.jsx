import Image from "next/image";
import Classes from './StageHero.module.css'

export default function StageHero({title, stageImage, stageDescription}) {
  return (
    <section className={Classes.container}>
      <Image src={stageImage} width={120} />
      <div>
        <h1 className={Classes.title}>{title}</h1>
        <p>{stageDescription}</p>
      </div>
    </section>
  );
}
