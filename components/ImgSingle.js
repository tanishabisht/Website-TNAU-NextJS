import styles from '../styles/Template.module.css'


export default function ImgSingle({img_src}) {
    return (
        <div class={styles.BodyImgContainer}>
            <div class={styles.BodyImgBorder}>
                <img class={`${styles.BodyImg} ${styles.BodyImg1}`} src={img_src} />
            </div>
        </div>
    )
}