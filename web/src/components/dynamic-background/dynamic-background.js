import { useEffect, useRef } from 'react';
import styles from './dynamic-background.module.scss'
import Granim from 'granim';
import { isValidHTTPUrl } from '../../utils/url';

const SourceType = Object.freeze({ video: 'vid', gradient: 'gradient', image: 'img', stripe: 'stripe' });

function DynamicBackground({ children, background }) {
    const canvasRef = useRef(null);

    useEffect(() => {
        if (background.sourceType === SourceType.gradient && canvasRef.current) {
            new Granim({
                element: canvasRef.current,
                direction: 'diagonal',
                isPausedWhenNotInView: true,
                states: {
                    "default-state": {
                        gradients: background.src,
                        transitionSpeed: 5000,
                        loop: true
                    },
                }
            });
        }
    }, [background.src, background.sourceType]);

    const mappedPath = (src) => isValidHTTPUrl(src) ? src : `${process.env.PUBLIC_URL}/assets/${src}`;

    const renderBackground = () => {
        switch (background.sourceType) {
            case SourceType.video: {
                const path = mappedPath(background.src);
                return <video src={path} autoPlay loop muted className={styles.video} />;
            }
            case SourceType.stripe:
                return <canvas className={styles['gradient-canvas']} data-js-darken-top data-transition-in></canvas>;
            case SourceType.gradient:
                return <canvas ref={canvasRef} className={styles.gradient} />;
            case SourceType.image: {
                const path = mappedPath(background.src);
                return <div className={styles.image} style={{ backgroundImage: `url(${path})` }} />;
            }
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