import Head from 'next/head'
import HeroContent from '../components/HeroContent'
import ImgDouble from '../components/ImgDouble'


export default function bambusetum() {

    const data = {
        img_src: '/4_plant.jpg', 
        heading: 'Bambusetum', 
        content: 'Bamboos, botanically considered a specialized group in the Grass family, are fascinating for different reasons. Twelve different species of bamboo have been planted in the Bambusetum. The TNAU Bambusetum aims to have an exhaustive collection of bamboos that grown in a tropical climatic zone and to gather valuable scientific information on bamboo growth in the state. Bamboo is highly versatile and absorbs carbon dioxide and releases over 30% more oxygen in to the atmosphere compared to an equivalent mass of trees.',
        body_img_src1: '/4_plant1.jpg',
        body_img_src2: '/4_plant2.jpg',
        body_img_src3: '/4_plant1.jpg',
        body_img_src4: '/4_plant2.jpg'
    }

    return (
        <section>
            <Head>
                <title>TNAU - Bambusetum</title>
            </Head>

            <HeroContent img_src={data.img_src} heading={data.heading} content={data.content} />
            <ImgDouble img_src1={data.body_img_src1} img_src2={data.body_img_src2} />
        </section>
    )
}