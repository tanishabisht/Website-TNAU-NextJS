import styles from '../styles/Template.module.css'


export default function ImgDoubleName({img_src1, img_src2, name1, name2}) {
    return (
        <div className={styles.BodyImgContainer}>
            <div>
                <div className={`${styles.BodyImgBorder} ${styles.BodyImgBorderName}`}>
                    <img className={styles.BodyImg} src={img_src1} />
                </div>
                <p className={styles.Name}>{name1}</p>
            </div>
            <div>
                <div className={`${styles.BodyImgBorder} ${styles.BodyImgBorderName}`}>
                    <img className={styles.BodyImg} src={img_src2} />
                </div>
                <p className={styles.Name}>{name2}</p>
            </div>
        </div>
    )
}