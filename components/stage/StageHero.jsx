import Image from "next/image";

export default function StageHero({title, stageImage}) {
  return (
    <section>
      <Image src={stageImage} width={50} />
      <div>
        <h1>{title}</h1>
        <p>A phrase for this stage</p>
      </div>
    </section>
  );
}
