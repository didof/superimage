import { useReducer, createContext, FunctionComponent } from 'react'
import superImageReducer from './SuperImageReducer'
import SuperImageContext, { initialState } from './SuperImageContext'

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
