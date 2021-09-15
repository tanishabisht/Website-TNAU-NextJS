import Image from 'next/image'
import logo from '../public/logo.gif'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
    return (
        <section>

            <div className={styles.Header}>
                <span className={styles.Header_left}>
                    <div className={styles.Logo}>
                        <Image src={logo} alt="logo" height={100} width={100} />
                    </div>
                    <h3 className={styles.Name}>Tamil Nadu Agricultural University</h3>
                </span>
                <span><a className={styles.Link} href="/index.html#footer">CONTACT US</a></span>
            </div>

            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item active"><a className="nav-link" href="/index.html">Home</a></li>
                        <li className="nav-item"><a className="nav-link" href="/Pages/GenesisOfGarden.html">Genesis of the Garden</a></li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Highlights</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/Pages/2_IconOfCoimbatore.html">Icon of Coimbatore</a>
                                <a className="dropdown-item" href="/soon.html">Rare plants</a>
                                <a className="dropdown-item" href="/Pages/4_PlantConservatory.html">Plant Conservatory</a>
                                <a className="dropdown-item" href="/soon.html">Cacti & succulent house</a>
                                <a className="dropdown-item" href="/soon.html">Island Park</a>
                                <a className="dropdown-item" href="/soon.html">Bambusetum</a>
                                <a className="dropdown-item" href="/soon.html">Palmatum</a>
                                <a className="dropdown-item" href="/soon.html">Children’s Park</a>
                            </div>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Plant Biodiversity</a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="/soon.html">Trees</a>
                                <a className="dropdown-item" href="/soon.html">Shrubs</a>
                                <a className="dropdown-item" href="/soon.html">Climbers & Creepers</a>
                                <a className="dropdown-item" href="/soon.html">Flowering annuals</a>
                                <a className="dropdown-item" href="/soon.html">Cacti & Succulents</a>
                                <a className="dropdown-item" href="/soon.html">Adeniums</a>
                                <a className="dropdown-item" href="/soon.html">Foliage plants</a>
                                <a className="dropdown-item" href="/soon.html">Turf grasses</a>
                                <a className="dropdown-item" href="/soon.html">Ornamental grasses</a>
                                <a className="dropdown-item" href="/soon.html">Bulbous ornamentals</a>
                                <a className="dropdown-item" href="/soon.html">Bamboos</a>
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