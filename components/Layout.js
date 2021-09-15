import Footer from './Footer'
import Navbar from './Navbar'
import styles from '../styles/Layout.module.css'


export default function Layout({children}) {
    return (
        <div className={styles.Bg}>
            <Navbar/>
                {children}
            <Footer/>
        </div>
    )
}