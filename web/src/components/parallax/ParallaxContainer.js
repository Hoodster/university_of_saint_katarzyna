import styles from './parallax.module.scss'

function ParallaxContainer(props) {
    return (<div className={styles.container}>
        {props.children}
    </div>)
}

export default ParallaxContainer