import Head from 'next/head'
import HeroContent from '../../components/HeroContent'
import ImgDouble from '../../components/ImgDouble'


export default function plant() {

    const data = {
        img_src: '/4_plant.jpg', 
        heading: 'Plant Conservatory', 
        content: 'A recently renovated plant conservatory harbours around 400 species of unique ornamental plant species. A plant conservatory is a protected structure made with shade net to provide partial light for shade loving plants and highly priced ornamental plants including orchids, anthuriums, high value indoor plants, medicinally important plant species, etc. It helps to create a special environment with cool, airy, humid and marshy conditions for shade loving, moisture loving and water loving plants. A water body and a bamboo fountain at the center of the conservatory enable increasing humidity.  This component serves as a valuable educational tool to teach students about valuable plant species.',
        body_img_src1: '/4_plant1.jpg',
        body_img_src2: '/4_plant2.jpg'
    }

    return (
        <section>
            <Head>
                <title>TNAU - Rare Plants</title>
            </Head>

            <HeroContent img_src={data.img_src} heading={data.heading} content={data.content} />
            <ImgDouble img_src1={data.body_img_src1} img_src2={data.body_img_src2} />
        </section>
    )
}