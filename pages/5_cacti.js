import Head from 'next/head'
import HeroContent from '../components/HeroContent'
import ImgDouble from '../components/ImgDouble'


export default function cacti() {

    const data = {
        img_src: '/4_plant.jpg', 
        heading: 'Cacti & Succulent House', 
        content: 'A glasshouse house harbours a diverse collection of cacti and succulents.',
        body_img_src1: '/4_plant1.jpg',
        body_img_src2: '/4_plant2.jpg',
        body_img_src3: '/4_plant1.jpg',
        body_img_src4: '/4_plant2.jpg'
    }

    return (
        <section>
            <Head>
                <title>TNAU - Cacti & Succulent House</title>
            </Head>

            <HeroContent img_src={data.img_src} heading={data.heading} content={data.content} />
            <ImgDouble img_src1={data.body_img_src1} img_src2={data.body_img_src2} />
            <ImgDouble img_src1={data.body_img_src3} img_src2={data.body_img_src4} />
        </section>
    )
}