import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/home/hero'
import StageList from '@/components/home/stageList'
import { getAllStages } from '@/data/data'

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
  <>
  <Hero />
  <StageList stages={stages}  />
  </>)
}
