import styles from 'parallax.module.scss'
function ParallaxSection({bgSrc, sectionContent}) {
    return (
        <>
            <video autoPlay muted loop id={styles.background}>
                <source src={bgSrc} type='video/mp4'/>
            </video>

            <div className={styles.content}>
                {sectionContent}
            </div>
        </>
    )

}

export default ParallaxSection