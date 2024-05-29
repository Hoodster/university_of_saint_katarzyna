import { useEffect, useRef } from 'react';
import styles from './dynamic-background.module.scss'
import Granim from 'granim';
import { isValidHTTPUrl } from '../../utils/url';

const SourceType = Object.freeze({ video: 'vid', gradient: 'gradient', image: 'img' });

function DynamicBackground({ children, background }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (background.sourceType === SourceType.gradient && canvasRef.current) {
            new Granim({
                element: canvasRef.current,
                direction: 'top-bottom',
                isPausedWhenNotInView: true,
                states: {
                    "default-state": {
                        gradients: background.src,
                        transitionSpeed: 1000
                    }
                }
            });
        }
    }, [background.src, background.sourceType]);

    const renderBackground = () => {
        const source = isValidHTTPUrl(background.src) ? background.src : require(`../../assets/${background.src}`)

        switch (background.sourceType) {
            case SourceType.video:
                return (
                    <video src={source} autoPlay loop muted className={styles.video} />
                );
            case SourceType.gradient:
                return (
                    <canvas ref={canvasRef} className={styles.gradient} />
                );
            case SourceType.image:
                return <div className={styles.image} style={{ backgroundImage: `url(${source})` }} />;
            default:
                return <div>fail</div>;
        }
    }

    return (
        <div className={styles.container}>
            {renderBackground()}
            <div className={styles.filter} />
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export { SourceType }
export default DynamicBackground