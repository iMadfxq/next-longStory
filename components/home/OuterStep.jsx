import { useState } from "react";
import Classes from "./OuterStep.module.css";
import StageItem from "./StageItem";

export default function OuterStep({ stepPosition, stage, index }) {
  const [stepOpen, setStepOpen] = useState(false);
  return (
    <>
      <div
        className={`${Classes.step} ${
          stepPosition === "up" ? Classes.up : Classes.down
        } ${Classes["_" + index]}`}
        onClick={() => setStepOpen(true)}
      >
        👣{" "}
        {stepOpen && (
          <div className={Classes.innerstep}>
            <StageItem stage={stage} />
          </div>
        )}
      </div>
    </>
  );
}
