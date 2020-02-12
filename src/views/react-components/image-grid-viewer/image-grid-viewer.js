import './style/image-grid-viewer.sass'
import React from 'react'
import CommonCloseBtn from '../common-close-button/common-close-btn'

/**
 * @param {{ closeGridViewer: any; gridViewerItems: {src: any; viewer: any, description?: string}[]; }} props
 */
export default function ImageGrigViewer(props) {
  const {closeGridViewer, gridViewerItems} = props
  
  const gridItems = gridViewerItems.map(item => {
    const {src, viewer, description} = item
    const Viewer = viewer

    return (
      <div className="image-grid-viewer-item">
        <span><strong>{description}</strong></span>
        <Viewer src={src} />
      </div>
    )
  })
  
  return (
    
    <div className="image-grid-viewer">
      <CommonCloseBtn onClick={closeGridViewer}/>
      {gridItems}
    </div>
  )
}

