import Link from "next/link";
import Classes from './StageNavigation.module.css'

export default function StageNavigation({ currentStageId, numberOfStages, prevStage, nextStage }) {
  return (
    <section className={Classes.container}>
      {currentStageId != 0 && (
        <Link href={`/stage/${prevStage}`} className={Classes.leftButton}>
          ←
        </Link>
      )}
      {numberOfStages - 1 != currentStageId && (
        <Link href={`/stage/${nextStage}`} className={Classes.rightButton}>
          →
        </Link>
      )}
    </section>
  );
}
