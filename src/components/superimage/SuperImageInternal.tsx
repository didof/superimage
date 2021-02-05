import {
  useState,
  createRef,
  useContext,
  useEffect,
  FunctionComponent,
  ReactNode,
} from 'react'
import { getBasename } from '../../utils/getBasename'
import { SuperImageContext } from './SuperImage.Provider'

interface SuperImageInternalProps {
  src: string
  alt?: string
}

interface OutputWrappers {
  withRedirectToUrl?: string
}

const SuperImageInternal: FunctionComponent<SuperImageInternalProps> = ({
  src,
  alt,
}) => {
  const imageRef = createRef<HTMLImageElement>()
  const { state, dispatch } = useContext(SuperImageContext)
  const { imageSrc } = state

  let imageElement: Element
  useEffect(() => {
    imageElement = imageRef.current!

    let imageAlt = alt
    if (!alt) imageAlt = getBasename(src)
    imageElement.setAttribute('alt', imageAlt!)
  }, [])

  useEffect(() => {
    let observer: IntersectionObserver
    let didCancel = false

    const observation: IntersectionObserverCallback = entries => {
      /**
       * since there is a 1: 1 relationship between image and
       * intersectionObserver, there is no need to iterate all entries;
       * there is only one
       */
      const entry = entries[0]

      /**
       * Keeping in mind that until we impose differently, imageRef
       * corresponds to the placeholder (see the variable placeholder in
       * SuperImage.Provider), let's overwrite it with the image you want
       * to use - however first we check that:
       * 1. the cleanup hasn't happened yet, so the element is still in the DOM
       * 2. the element is in the window (since in options the root = null, so
       *    it refers to the window)
       * 3. The element is entering the window
       */
      if (!didCancel && (entry.intersectionRatio > 0 || entry.isIntersecting)) {
        dispatch({ type: 'setImageSrc', payload: src })
        observer.unobserve(imageElement)
      }
      /**
       * Once set up the observer has done its job and can stop observing
       */
    }

    // TODO: make this customizable
    const options: IntersectionObserverInit = {
      threshold: 0.01,
      rootMargin: '75%',
    }

    if (imageRef && imageSrc !== src) {
      if (!IntersectionObserver) {
        /**
         * fallback for older browsers
         */
        imageElement.setAttribute('loading', 'lazy')
        dispatch({ type: 'setImageSrc', payload: src })
      } else {
        observer = new IntersectionObserver(observation, options)
        observer.observe(imageElement)
      }
    }

    /**
     * clean up
     */
    return () => {
      didCancel = true
      if (observer && observer.unobserve) {
        observer.unobserve(imageElement)
      }
    }
  }, [src, imageSrc, imageRef])

  return <img className='superimage' ref={imageRef} src={imageSrc} />
}

export default SuperImageInternal
