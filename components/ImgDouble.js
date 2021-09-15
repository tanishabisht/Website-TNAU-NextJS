import styles from '../styles/Template.module.css'


export default function ImgDouble({img_src1, img_src2}) {
    return (
        <div className={styles.BodyImgContainer}>
            <div className={styles.BodyImgBorder}>
                <img className={styles.BodyImg} src={img_src1} />
            </div>
            <div className={styles.BodyImgBorder}>
                <img className={styles.BodyImg} src={img_src2} />
            </div>
        </div>
    )
}