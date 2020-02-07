import './style/zoom-controller.sass'
import React from 'react'
import CommonCloseButton from '../common-close-button/common-close-btn'

/**
 * @param {{ isZoomingIn: boolean; setZoomingIn: Function; src?: string;}} props
 */
export default function ZoomController(props) {
  const {
    isZoomingIn, 
    setZoomingIn, 
    src, 
  } = props

  function closeZoomCanvas() {
    setZoomingIn(false)
  }

  return (
    <>
      {
        isZoomingIn &&
        <div className="zoom-controller">
          <CommonCloseButton onClick={(closeZoomCanvas)}/>
            <div className="zoom-controller-canvas">
              <img src={src} />
            </div>
        </div>
      }
    </>
  )
}