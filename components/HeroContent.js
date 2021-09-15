import styles from '../styles/Template.module.css'


export default function HeroContent({img_src, heading, content}) {
    return (
        <div class={styles.Container}>
            <div class={styles.HeroImgContainer}>
                <div class={styles.HeroBorder}>
                    <img className={styles.HeroImg} src={`${img_src}`} />
                </div>
            </div>    
            <div class={styles.HeroContentContainer}>
                <h1>{heading}</h1>
                <hr/>
                <p>{content}</p>
            </div>
        </div>
    )
}