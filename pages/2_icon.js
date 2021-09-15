import Head from 'next/head'
import HeroContent from '../components/HeroContent'


export default function icon() {

    const data = {
        img_src: '/2_icon.jpg', 
        heading: 'Icon of Coimbatore', 
        content: 'The Botanical Garden serves as a valuable centre to educate the concepts of floriculture and landscaping to the students and scholars of educational institutions besides serving as a treasure house for garden enthusiast, nature lovers, botanists and visitors. The garden spreads out over an area of 47.70 acres. It harbours a diverse and rich collection of native and exotic flora representing about 800 species and 70 natural orders and is considered as ‘the lung of Coimbatore’ owing to its rich floral wealth and serene atmosphere. Besides, the nursery attached with the garden is supplying various ornamentals to the public. TNAU Botanical Garden is the only learning cum recreational park available in the Western zone of Tamil Nadu, particularly Coimbatore.'
    }

    return (
        <section>
            <Head>
                <title>TNAU - Icon of Coimbatore</title>
            </Head>

            <HeroContent img_src={data.img_src} heading={data.heading} content={data.content} />
        </section>
    )
}