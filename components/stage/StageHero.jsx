import Image from "next/image";
import Classes from './StageHero.module.css'

export default function StageHero({title, stageImage}) {
  return (
    <section className={Classes.container}>
      <Image src={stageImage} width={50} />
      <div>
        <h1>{title}</h1>
        <p>A phrase for this stage</p>
      </div>
    </section>
  );
}
