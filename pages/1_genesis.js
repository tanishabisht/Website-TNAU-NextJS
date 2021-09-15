import Head from 'next/head'
import HeroContent from '../components/HeroContent'


export default function genesis() {

    const data = {
        img_src: '/1_genesis.jpg', 
        heading: 'Genesis of the Garden', 
        content: 'The Botanical Garden of the Tamil Nadu Agricultural University, Coimbatore was established during the year 1908. This is one of the important gardens in Tamil Nadu and also the foremost of the Institutional gardens in India. It is the ‘second largest garden’ in Tamil Nadu after the Government Botanic Garden, Ooty. The Department of Floriculture and Landscape Architecture which is situated amidst the Botanical Garden is vested with the maintenance of the garden.'
    }

    return (
        <section>
            <Head>
                <title>TNAU - Genesis Of The Garden</title>
            </Head>

            <HeroContent img_src={data.img_src} heading={data.heading} content={data.content} />
        </section>
    )
}