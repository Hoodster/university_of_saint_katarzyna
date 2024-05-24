import React, { useEffect } from 'react';
import Granim from 'granim';

/**
 * @enum {number}
 */
export const SourceType = Object.freeze({
  video: 0,
  gradient: 1,
  image: 2
});

/**
 * 
 * @param {string} source 
 * @param {SourceType} sourceType 
 * @returns {JSX.Element}
 */
function useGetBackground(source, sourceType) {
  useEffect(() => {
    if (sourceType === SourceType.gradient) {
      new Granim({
        element: '#gradient-background',
        direction: 'top-bottom',
        stateTransitionSpeed: 0.4,
        states: {
          'default-state': {
            gradients: [
              ['#ff9966', '#ff5e62'],
              ['#00F260', '#0575E6'],
              ['#e1eec3', '#f05053']
            ]
          }
        }
      });
    }
  }, [sourceType]);

  const getVideoComponent = () => (
    <video src={source} loop autoPlay muted style={{ width: '100%', height: '100%' }} />
  );

  const getGradientComponent = () => (
    <canvas id="gradient-background" style={{ width: '100%', height: '100%' }} />
  );

  const BackgroundImageComponent = () => {
    const divStyle = {
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${source})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
    };
    return divStyle
  };

  switch (sourceType) {
    case SourceType.video:
      console.log('video selected')
      return getVideoComponent();
    case SourceType.gradient:
      console.log('gradient selected')
      return getGradientComponent();
    case SourceType.image:
      console.log('image selected')
      return BackgroundImageComponent();
    default:
      console.warn('Invalid source type');
      return <></>;
  }
}

export default useGetBackground;