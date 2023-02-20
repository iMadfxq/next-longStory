import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/home/hero'
import StageList from '@/components/home/stageList'
import { getAllStages } from '@/data/data'
import Classes from '../styles/home.module.css'

export function getStaticProps() {

  const stages = getAllStages()

  return {
    props: {
      stages
    }
  }
}

export default function Home({stages}) {
  return (
  <section className={Classes.container}>
  <Hero stages={stages} />
  <StageList stages={stages}  />
  </section>)
}
