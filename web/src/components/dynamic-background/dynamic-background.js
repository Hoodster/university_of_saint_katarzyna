import { useEffect, useRef } from 'react';
import styles from './dynamic-background.module.scss'
import Granim from 'granim';

const SourceType = Object.freeze({video:'vid',gradient:'gradient',image:'img'});
 
function DynamicBackground({children, background}) {
    console.log(background)
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
        switch (background.sourceType) {
            case SourceType.video:
                return (
                    <video autoPlay loop muted className={styles.video}>
                        <src src={background.src} type='video/mp4' />
                    </video>
                );
            case SourceType.gradient:
                return (
                    <canvas ref={canvasRef} className={styles.gradient}/>
                );
            case SourceType.image:
                return <div className={styles.image} style={{backgroundImage: `url$(${background.src})`}} />;
            default:
                return null;
        }
    }

    return (
        <div className={styles.container}>
            {renderBackground()}
            <div className={styles.content}>{children}</div>
        </div>
    );
};

export { SourceType }
export default DynamicBackground