import { useState, createContext, FunctionComponent } from 'react'

interface SuperImageContextI {
  imageSrc: string
  setImageSrc?: React.Dispatch<React.SetStateAction<string>>
}

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

export const SuperImageContext = createContext<SuperImageContextI>({
  imageSrc: placeHolder,
})

interface ISuperImageProvider {
  children?: React.ReactNode
}

const SuperImageProvider: FunctionComponent<ISuperImageProvider> = ({
  children,
}) => {
  const [imageSrc, setImageSrc] = useState(placeHolder)

  return (
    <SuperImageContext.Provider
      value={{
        imageSrc,
        setImageSrc,
      }}
    >
      {children}
    </SuperImageContext.Provider>
  )
}

export default SuperImageProvider
