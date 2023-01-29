import Head from 'next/head'
import Image from 'next/image'
import Hero from '@/components/home/hero'
import StageList from '@/components/home/stageList'


export default function Home() {
  return (
  <>
  <Hero />
  <StageList />
  </>)
}
