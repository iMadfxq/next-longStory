import Classes from './Layout.module.css'


export default function Layout({children}) {
  return (
    <main className={Classes.main}>
      {children}
    </main>
  )
}