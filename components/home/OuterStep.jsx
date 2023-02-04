import { useState } from "react";
import Classes from "./OuterStep.module.css";
import StageItem from "./StageItem";

export default function OuterStep({ stepPosition, stage }) {
  const [stepOpen, setStepOpen] = useState(false);
  return (
    <>
      <div
        className={`${Classes.step} ${stepPosition}`}
        onClick={() => setStepOpen(true)}
      ></div>
      {stepOpen && (
        <div className={Classes.innerstep}>
          <StageItem stage={stage} />
        </div>
      )}
    </>
  );
}
