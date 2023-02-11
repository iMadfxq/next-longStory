import OuterStep from "./OuterStep";
import Classes from './StepsList.module.css'

export default function StepsList({ stages }) {
  return (
    <div className={Classes.container}>
      {stages.map((stage, i) => {
        if (i != 0 && i % 2 != 0) {
          return <OuterStep stage={stage} stepPosition={"up"} index={i} />;
        }

        return <OuterStep stage={stage} stepPosition={"down"} index={i} />;
      })}
    </div>
  );
}
