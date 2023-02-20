import Classes from './Milestones.module.css'

export default function Milestones({proudThings}) {
  return (
    <section className={Classes.container}>
      <h1 className={Classes.title}>Important Milestones</h1>
      <section>
        <ul>
          {proudThings.map(m => <li>{m}</li>)}
        </ul>
      </section>
    </section>
  )
}