export default function Milestones({proudThings}) {
  return (
    <>
      <h1>Important Milestones</h1>
      <section>
        <ul>
          {proudThings.map(m => <li>{m}</li>)}
        </ul>
      </section>
    </>
  )
}