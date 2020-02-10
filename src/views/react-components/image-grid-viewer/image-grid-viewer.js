import './style/image-grid-viewer.sass'
import React from 'react'
import CommonCloseBtn from '../common-close-button/common-close-btn'

/**
 * @param {{ closeGridViewer: any; gridViewerItems: {src: any; viewer: any}[]; }} props
 */
export default function ImageGrigViewer(props) {
  const {closeGridViewer, gridViewerItems} = props
  
  const gridItems = gridViewerItems.map(item => {
    const {src, viewer} = item
    const Viewer = viewer

    return (
      <div className="image-grid-viewer-item">
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

