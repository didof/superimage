// core
import React, { ReactElement, ReactNode } from 'react'

// skaffold
import SuperImageProvider from './app/SuperImageProvider'
import SuperImageBuilder from './app/SuperImageBuilder'

// children
import WithRedirectToSrc from './children/WithRedirectToSrc'
import { assertChildAmount } from '../../utils/countChildren'

import './style.css'

// interface
interface SuperImageProps {
  children?: ReactNode
  src: string
  prefetch?: boolean
}

export type SuperImageDirectives = {
  prefetch: boolean
  withRedirectToSrc: boolean
}

const defaultDirectives: SuperImageDirectives = {
  prefetch: false,
  withRedirectToSrc: false,
}

class SuperImage extends React.Component<SuperImageProps> {
  static WithRedirectToSrc = WithRedirectToSrc

  directives: SuperImageDirectives = defaultDirectives

  constructor(props: SuperImageProps) {
    super(props)

    if (this.props.prefetch) {
      this.directives.prefetch = true
    }

    const { children } = this.props

    /**
     * If not children are used the delegate is not needed
     */
    if (children) {
      if (assertChildAmount(children, 'WithRedirectToSrc', 1)) {
        this.directives.withRedirectToSrc = true
      }
    }
  }

  render() {
    return (
      <SuperImageProvider>
        <SuperImageBuilder src={this.props.src} directives={this.directives} />
        {this.props.children}
      </SuperImageProvider>
    )
  }
}

export default SuperImage
