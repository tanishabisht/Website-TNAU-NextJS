import styles from '../styles/Template.module.css'


export default function ImgDouble({img_src1, img_src2}) {
    return (
        <div class={styles.BodyImgContainer}>
            <div class={styles.BodyImgBorder}>
                <img class={styles.BodyImg} src={img_src1} />
            </div>
            <div class={styles.BodyImgBorder}>
                <img class={styles.BodyImg} src={img_src2} />
            </div>
        </div>
    )
}