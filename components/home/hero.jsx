import Classes from "./hero.module.css";
import Image from "next/image";
import OuterStep from "./OuterStep";
import StepsList from "./StepsList";
import Pic from "../../public/images/mypic.jpg";

export default function Hero({ stages }) {
  return (
    <section className={Classes.container}>
      <Image className={Classes.image} src={Pic} width={200} alt={"a picture of Oscar Gomez"}></Image>
      <div className={Classes.textContainer}>
        <h1>My journey as a human</h1>
        <section className={Classes.stepsContainer}>
          <StepsList stages={stages} />
        </section>
      </div>
    </section>
  );
}
