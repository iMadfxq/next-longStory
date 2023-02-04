import classes from './hero.module.css'
import Image from 'next/image'
import OuterStep from './OuterStep'
import StepsList from './StepsList'

export default function Hero({stages}) {
  return (
    <section>
      <div>
        <Image></Image>
      </div>
      <div>
        <h1>My journey as a human</h1>
        <div>
          <StepsList stages={stages} />
        </div>
      </div>
    </section>
  )
}