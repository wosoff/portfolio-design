import React, {useState} from 'react'
import ImageViewer from '../image-viewer/image-viewer'
import ZoomController from '../zoom-controller/zoom-controller'

/**
 * @param {{ workSrc: string; description?: string; width?: number; height?: number;}} props
 */
export default function ArtObjViewer(props) {
  const {workSrc, description, width, height} = props
  const [isOnZoomButton, clickZoomButton] = useState(false)
 
  return (
    <>
      <ImageViewer 
        src={workSrc}
        clickZoomButton={clickZoomButton}
        width={width}
        height={height}
      />
      <ZoomController 
        src={workSrc}
        isOnZoomButton={isOnZoomButton}
        clickZoomButton={clickZoomButton}
        width={width}
        height={height}                  
      />
      <p className="description-art-obj">{description}</p>
    </>
  )  
}