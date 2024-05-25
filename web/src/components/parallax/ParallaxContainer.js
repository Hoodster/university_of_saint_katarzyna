import { useEffect, useState, useRef, useCallback } from 'react';
import styles from './parallax.module.scss';
import ParallaxSection from './ParallaxSection';

function ParallaxContainer({slides, options}) {
    const ref = useRef(null)
    const [height, setHeight] = useState(0);

    /**
     * Detects scroll direction by delta Y and scrolls by one page.
     * @param {WheelEvent} e 
     */
    const handleScrollEvent = useCallback((e) => {
        e.preventDefault();

        if (e.deltaY > 0) { // up
            window.scrollBy({top: height, behavior: 'smooth'})
        }

        if (e.deltaY < 0) {
            window.scrollBy({top: -height, behavior: 'smooth'})
        }
    }, [height])

    useEffect(() => {
        const container = ref.current;
        setHeight(window.innerHeight);

        if (container) {
            container.addEventListener('wheel', handleScrollEvent);
        }

        return () => {
            container.removeEventListener('wheel', handleScrollEvent);
        }
    }, [handleScrollEvent])


    return (
    <div className={styles.container} ref={ref}>
        {slides.map((slide, index) => (<ParallaxSection key={index} slide={slide}/>))}
    </div>
    )};

export default ParallaxContainer