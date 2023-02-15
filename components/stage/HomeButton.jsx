import Link from "next/link"
import Classes from './HomeButton.module.css'

export default function HomeButton() {
  return (
    <Link href={'/'} className={Classes.button}>🏠</Link>
  )
}