import { createContext } from 'react'
import { SuperImageAction, SuperImageState } from './SuperImageReducer'

const placeHolder =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkqAcAAIUAgUW0RjgAAAAASUVORK5CYII='

export const initialState: SuperImageState = {
  imageSrc: placeHolder,
}

const SuperImageContext = createContext<{
  state: SuperImageState
  dispatch: React.Dispatch<SuperImageAction>
}>({ state: initialState, dispatch: () => null })

export default SuperImageContext
