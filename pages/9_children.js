import Head from 'next/head'
import HeroContent from '../components/HeroContent'


export default function children() {

    const data = {
        img_src: '/9_children.jpg', 
        heading: 'Children’s Park', 
        content: 'The children’s park has been upgraded and embellished with safety ensuring flooring and walkways, newer and safer play stations, planting of attractive shade trees and incorporation of educative concepts through creation of bird and rabbit rearing cages. Infrastructure for plant propagation and sale of nursery plants has been given a facelift to facilitate production of more number of good quality planting materials to cater to the requirements of farmers and urban garden enthusiasts.',
    }

    return (
        <section>
            <Head>
                <title>TNAU - Children’s Park</title>
            </Head>

            <HeroContent img_src={data.img_src} heading={data.heading} content={data.content} />
        </section>
    )
}