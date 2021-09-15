import Head from 'next/head'
import HeroContent from '../components/HeroContent'
import ImgDouble from '../components/ImgDouble'


export default function rare() {

    const data = {
        img_src: '/3_rare.jpg', 
        heading: 'Rare Plants', 
        content: 'The list of unique and rare ornamental plants conserved in the TNAU Botanical Garden include Hyphaene thebaica (Branching palm), Diallum indum (Velvet tamarind), Terminalia arjuna (Arjuna tree), Adenanthera pavonina (Red Bead Tree), Pongamia ovalifolia (Moulmein rosewood), Pterygota alata (Buddha’s coconut), Sterculia foetida (Java Olive), Kigelia pinnata (Sausage tree), Crescentia cujete (Calabash tree), Combretum constrictum (Powderpuff combretum), Capparis horrid, Gyrocarpus americanus and Corypha elata (Talipot palm).',
        body_img_src1: '/3_rare1.jpg',
        body_img_src2: '/3_rare2.jpg'
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