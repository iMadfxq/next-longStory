import OuterStep from "./OuterStep";

export default function StepsList({ stages }) {
  return (
    <>
      {stages.map((stage, i) => {
        if (i != 0 && i % 2 != 0) {
          return <OuterStep stage={stage} stepPosition={"up"} />;
        }

        return <OuterStep stage={stage} stepPosition={"down"} />;
      })}
    </>
  );
}
