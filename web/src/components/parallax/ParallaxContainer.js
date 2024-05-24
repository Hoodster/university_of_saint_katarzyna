import { useEffect, useState, useRef } from 'react';
import styles from './parallax.module.scss';

function ParallaxContainer(props) {
    const ref = useRef(null)
    const [height, setHeight] = useState(0);

    /**
     * Detects scroll direction by delta Y and overrides basic scroll.
     * @param {WheelEvent} e 
     */
    const handleScrollEvent = (e) => {
        e.preventDefault();

        if (e.deltaY > 0) { // up
            window.scrollBy({top: height, behavior: 'smooth'})
        }

        if (e.deltaY < 0) {
            window.scrollBy({top: -height, behavior: 'smooth'})
        }
    }

    useEffect(() => {
        const container = ref.current;
        setHeight(container.clientHeight/props.children.length);

        if (container) {
            container.addEventListener('wheel', handleScrollEvent);
        }

        return () => {
            container.removeEventListener('wheel', handleScrollEvent);
        }
    })


    return (
    <div className={styles.container} ref={ref}>
        {props.children}
    </div>
    )};

export default ParallaxContainer