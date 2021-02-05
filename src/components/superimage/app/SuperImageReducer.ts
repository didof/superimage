export type SuperImageState = {
  imageSrc: string
}

export type SuperImageAction = { type: 'setImageSrc'; payload: string }

const superImageReducer = (
  state: SuperImageState,
  action: SuperImageAction
) => {
  const { type, payload } = action
  switch (type) {
    case 'setImageSrc':
      return { ...state, imageSrc: payload }
  }
  return state
}

export default superImageReducer
