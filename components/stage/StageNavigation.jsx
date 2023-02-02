import Link from "next/link";

export default function StageNavigation({ currentStageId, numberOfStages, prevStage, nextStage }) {
  return (
    <section>
      {currentStageId != 0 && (
        <Link href={`/stage/${prevStage}`}>
          <button>←</button>
        </Link>
      )}
      {numberOfStages - 1 != currentStageId && (
        <Link href={`/stage/${nextStage}`}>
          <button>→</button>
        </Link>
      )}
    </section>
  );
}
