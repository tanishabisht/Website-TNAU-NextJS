import Head from 'next/head'
import styles from '../styles/Template.module.css'

import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Home</title>
      </Head>
      <div className="hero_img_container">
        <div className='hero_img'></div>
      </div>


      {/* <div className={styles.HeroVidContainer}>
        <div className={styles.HeroVidBorder}>
          <ReactPlayer light url="https://youtu.be/7kh3Pog6pyw" />
        </div>
      </div> */}

      <h4 className={styles.Heading}>AERIAL VIEW</h4>
      <div className="hero_video">
        <ReactPlayer light url="https://youtu.be/7kh3Pog6pyw" />
      </div>
    </section>
  )
}