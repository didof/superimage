import { useReducer, createContext, FunctionComponent } from 'react'
import superImageReducer, {
  SuperImageAction,
  SuperImageState,
} from './SuperImage.reducer'

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

const initialState: SuperImageState = {
  imageSrc: placeHolder,
}

export const SuperImageContext = createContext<{
  state: SuperImageState
  dispatch: React.Dispatch<SuperImageAction>
}>({ state: initialState, dispatch: () => null })

interface SuperImageProviderProps {
  children?: React.ReactNode
}
const SuperImageProvider: FunctionComponent<SuperImageProviderProps> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(superImageReducer, initialState)

  return (
    <SuperImageContext.Provider value={{ state, dispatch }}>
      {children}
    </SuperImageContext.Provider>
  )
}

export default SuperImageProvider
