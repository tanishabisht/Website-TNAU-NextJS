import Head from 'next/head'
import Image from 'next/image'
import main_img from '../public/hero_big.png'

import ReactPlayer from 'react-player';

export default function Home() {
  return (
    <section>
      <Head>
        <title>Home</title>
      </Head>
      <div className="hero_image">
        <Image src={main_img} />
      </div>
      <div className="hero_video">
        <ReactPlayer light url="https://youtu.be/7kh3Pog6pyw" />
      </div>
    </section>
  )
}