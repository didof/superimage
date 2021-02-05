// core
import React, { ReactNode } from 'react'

// skaffold
import SuperImageProvider from './SuperImage.Provider'
import SuperImageInternal from './SuperImageInternal'

// children
import WithRedirectToSrc from './children/WithRedirectToSrc'
import { assertChildAmount } from '../../utils/countChildren'

// interface
interface SuperImageProps {
  children?: ReactNode
  src: string
}

class SuperImage extends React.Component<SuperImageProps> {
  static WithRedirectToSrc = WithRedirectToSrc

  constructor(props: SuperImageProps) {
    super(props)

    const { children } = this.props
    if (children) {
      assertChildAmount(children, 'WithRedirectToSrc', 1)
    }
  }

  render() {
    return (
      <SuperImageProvider>
        <SuperImageInternal src={this.props.src} />
      </SuperImageProvider>
    )
  }
}

export default SuperImage
