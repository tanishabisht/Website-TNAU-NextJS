import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import main_img from '../public/hero.png'

export default function Home() {
  return (
    <section>
      <Head>
        <title>Home</title>
      </Head>
      <div class="hero_image">
        <Image src={main_img} />
      </div>
    </section>
  )
}