import styles from 'parallax.module.scss'
import getTemplate from '../../templates/templateService'

function ParallaxSection(slideData) {
    const {bgSource, headline, subHeadlines, options} = slideData

    return (
        <div k>
            <video autoPlay muted loop id={styles.background}>
                <source src={bgSource} type='video/mp4'/>
            </video>

            <div className={styles.content}>{getTemplate(headline, subHeadlines, options)}</div>
        </div>
    )
}

export default ParallaxSection