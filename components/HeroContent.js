import styles from '../styles/Template.module.css'


export default function HeroContent({img_src, heading, content}) {
    return (
        <div className={styles.Container}>
            <div className={styles.HeroImgContainer}>
                <div className={styles.HeroBorder}>
                    <img className={styles.HeroImg} src={`${img_src}`} />
                </div>
            </div>    
            <div className={styles.HeroContentContainer}>
                <h1>{heading}</h1>
                <hr/>
                <p>{content}</p>
            </div>
        </div>
    )
}