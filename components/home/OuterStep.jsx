import { useEffect, useState } from "react";
import Classes from "./OuterStep.module.css";
import StageItem from "./StageItem";
import { createPortal } from "react-dom";

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
        👣
      </div>
      {stepOpen &&
        createPortal(
          <div className={Classes.overlay} onClick={() => setStepOpen(false)}>
            <span className={Classes.close}>X</span>
            <div className={Classes.innerstep}>
              <StageItem stage={stage} />
            </div>
          </div>,
          document.querySelector("main")
        )}
    </>
  );
}
