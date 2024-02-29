import Image from 'next/image'
import styles from './page.module.css'
import Login from "../components/login"
import { Victor_Mono } from 'next/font/google'
export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.conteiner}><Login></Login></div>
    </main>
  )
  

}
