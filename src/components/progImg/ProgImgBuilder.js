import { useState, useRef, useEffect } from "react";

const placeHolder =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII=";

const ProgImgBuilder = ({ src, blurredSrc, blurredAmount }) => {
  const [isBlurred, setIsBlurred] = useState(false);
  const [imageSrc, setImageSrc] = useState(placeHolder);
  const imageRef = useRef();

  useEffect(() => {
    if (blurredSrc) {
      setImageSrc(blurredSrc);
      setIsBlurred(true);
    }
  }, []);

  useEffect(() => {
    let observer;
    let didCancel = false;
    const observation = (entries) => {
      const entry = entries[0];

      if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
        console.log("op");
        setImageSrc(src);
        setIsBlurred(false);
        observer.unobserve(imageRef.current);
      }
    };

    const options = {
      threshold: 1,
    };

    if (imageRef && imageSrc !== src) {
      if (!IntersectionObserver) {
        imageRef.current.setAttribute("loading", "lazy");
        return;
      }

      observer = new IntersectionObserver(observation, options);
      observer.observe(imageRef.current);
    }

    return () => {
      didCancel = true;
      if (observer && observer.unobserve) {
        observer.unobserve(imageRef.current);
      }
    };
  }, [src, imageSrc, imageRef]);

  return (
    <img
      className="image"
      style={{ filter: `blur(${isBlurred ? blurredAmount + "px" : 0})` }}
      ref={imageRef}
      src={imageSrc}
      width="100%"
    />
  );
};

export default ProgImgBuilder;

/**
 * calcola padding top in base a ratio che arriva come prop
 */