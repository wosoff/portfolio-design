import React, {useState} from 'react'
import ImageViewer from '../image-viewer/image-viewer'
import ZoomController from '../zoom-controller/zoom-controller'

/**
 * @param {{ workSrc: string; description?: string}} props
 */
export default function ArtObjViewer(props) {
  const {workSrc, description} = props
  const [isOnZoomButton, clickZoomButton] = useState(false)
 
  return (
    <>
      <ImageViewer 
        src={workSrc}
        clickZoomButton={clickZoomButton}
      />
      <ZoomController 
        src={workSrc}
        isOnZoomButton={isOnZoomButton}
        clickZoomButton={clickZoomButton}
      />
      <p className="description-art-obj">{description}</p>
    </>
  )  
}