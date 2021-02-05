export type SuperImageState = {
  imageSrc: string
  redirectUrl?: string
}

export type SuperImageAction =
  | { type: 'setImageSrc'; payload: string }
  | { type: 'setRedirectUrl'; payload: string }

const superImageReducer = (
  state: SuperImageState,
  action: SuperImageAction
) => {
  const { type, payload } = action
  switch (type) {
    case 'setImageSrc':
      return { ...state, imageSrc: payload }
    case 'setRedirectUrl':
      return { ...state, redirectUrl: payload }
  }
  return state
}

export default superImageReducer
