import classes from './hero.module.css'
import Image from 'next/image'

import fall from '../../public/Fulmer_Falls_Closeup_3000px.jpg'
import building from '../../public/mohsen-ameri-eX5BI7h-PGQ-unsplash.jpg'

export default function Hero() {
  return <>
  <Image src={fall} width='300' height={'240'} placeholder='blur'></Image>
  <Image src={building} width='300' height={'240'} placeholder='blur'  ></Image>
  </>
}