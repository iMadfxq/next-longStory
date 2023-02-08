import classes from './hero.module.css'
import Image from 'next/image'
import OuterStep from './OuterStep'
import StepsList from './StepsList'
import Pic from "../../public/images/mypic.jpg"


export default function Hero({stages}) {
  return (
    <section>
      <div>
        <Image src={Pic} width={200} ></Image>
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