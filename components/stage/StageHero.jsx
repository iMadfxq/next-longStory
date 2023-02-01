import Image from "next/image";

export default function StageHero({title}) {
  return (
    <section>
      <Image />
      <div>
        <h1>{title}</h1>
        <p>A phrase for this stage</p>
      </div>
    </section>
  );
}
