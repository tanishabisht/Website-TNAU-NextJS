import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from "next/router";
import logo from '../public/logo.gif'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {

    const router = useRouter()

    return (
        <section>

            <div className={styles.Header}>
                <span className={styles.Header_left}>
                    <div className={styles.Logo}>
                        <Image src={logo} alt="logo" height={100} width={100} />
                    </div>
                    <h3 className={styles.Name}>Tamil Nadu Agricultural University | Botanical Garden</h3>
                </span>
                <span><a className={styles.Link} href="/index.html#footer">CONTACT US</a></span>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={router.pathname == "/" ? "active nav-item" : "nav-item"}><Link href="/"><a className="nav-link">Home</a></Link></li>
                        <li className={router.pathname == "/1_genesis" ? "active nav-item" : "nav-item"}><Link href="/1_genesis"><a className="nav-link">Genesis of the Garden</a></Link></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Highlights</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link href="/2_icon"><a className="dropdown-item">Icon of Coimbatore</a></Link>
                                <Link href="/3_rare"><a className="dropdown-item">Rare plants</a></Link>
                                <Link href="/4_plant"><a className="dropdown-item">Plant Conservatory</a></Link>
                                <Link href="/5_cacti"><a className="dropdown-item">Cacti & succulent house</a></Link>
                                <Link href="/6_island"><a className="dropdown-item">Island Park</a></Link>
                                <Link href="/7_bambusetum"><a className="dropdown-item">Bambusetum</a></Link>
                                <Link href="/8_palmatum"><a className="dropdown-item">Palmatum</a></Link>
                                <Link href="/9_children"><a className="dropdown-item">Children’s Park</a></Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Plant Biodiversity</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link href="/404"><a className="dropdown-item">Trees</a></Link>
                                <Link href="/404"><a className="dropdown-item">Shrubs</a></Link>
                                <Link href="/404"><a className="dropdown-item">Climbers & Creepers</a></Link>
                                <Link href="/404"><a className="dropdown-item">Flowering annuals</a></Link>
                                <Link href="/404"><a className="dropdown-item">Cacti & Succulents</a></Link>
                                <Link href="/404"><a className="dropdown-item">Adeniums</a></Link>
                                <Link href="/404"><a className="dropdown-item">Foliage plants</a></Link>
                                <Link href="/404"><a className="dropdown-item">Turf grasses</a></Link>
                                <Link href="/404"><a className="dropdown-item">Ornamental grasses</a></Link>
                                <Link href="/404"><a className="dropdown-item">Bulbous ornamentals</a></Link>
                                <Link href="/404"><a className="dropdown-item">Bamboos</a></Link>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Garden Styles & Components</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/soon.html">Formal Garden</a>
                                <a className="dropdown-item" href="/soon.html">Japanese Garden</a>
                                <a className="dropdown-item" href="/soon.html">Sunken Garden</a>
                                <a className="dropdown-item" href="/soon.html">Statue Garden</a>
                                <a className="dropdown-item" href="/soon.html">Cascade</a>
                                <a className="dropdown-item" href="/soon.html">Garden Maze</a>
                                <a className="dropdown-item" href="/soon.html">Picnic spot</a>
                                <a className="dropdown-item" href="/soon.html">Two level garden</a>
                                <a className="dropdown-item" href="/soon.html">Arboretum</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Research</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/soon.html">Crop germplasm</a>
                                <a className="dropdown-item" href="/soon.html">Jasmine</a>
                                <a className="dropdown-item" href="/soon.html">Tuberose</a>
                                <a className="dropdown-item" href="/soon.html">TNAU Varieties</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Plant Nursery</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/soon.html">Propagation facilities</a>
                                <a className="dropdown-item" href="/soon.html">Plant propagation</a>
                                <a className="dropdown-item" href="/soon.html">Sales</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Nature Conservation Initiatives</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/soon.html">Alumni Tree Care Programme</a>
                                <a className="dropdown-item" href="/soon.html">Adopt a tree</a>
                                <a className="dropdown-item" href="/soon.html">Woodlots</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    )
}