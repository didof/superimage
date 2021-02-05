import React, { useState, useEffect, createContext } from 'react'

import SuperImageProvider from './SuperImage.Provider'
import SuperImageInternal from './SuperImageInternal'

interface SuperImageProps {
  src: string
}

class SuperImage extends React.Component<SuperImageProps> {
  render() {
    return (
      <SuperImageProvider>
        <SuperImageInternal src={this.props.src} />
      </SuperImageProvider>
    )
  }
}

export default SuperImage
