import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <footer id="footer">
            <h4 className={styles.Header}>CONTACT US</h4>
            <div className={styles.Details}>
                <div>
                    <p style={{fontWeight:'700'}}>The Professor &amp; Head</p>
                    <p>Department of Floriculture and Landscape Architecture <br/> HC &amp; RI, TNAU Coimbatore - 641 003, Tamil Nadu, India</p>
                </div>
                <div>
                    <p><i className="far fa-envelope"></i><a className={styles.Link} href="mailto: flowers@tnau.ac.in">flowers@tnau.ac.in</a></p>
                    <p><i className="fas fa-phone-alt"></i>+91 422 6611200</p>
                </div>
            </div>
        </footer>
    )
}