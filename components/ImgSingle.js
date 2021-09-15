import styles from '../styles/Template.module.css'


export default function ImgSingle({img_src}) {
    return (
        <div className={styles.BodyImgContainer}>
            <div className={styles.BodyImgBorder}>
                <img className={`${styles.BodyImg} ${styles.BodyImg1}`} src={img_src} />
            </div>
        </div>
    )
}