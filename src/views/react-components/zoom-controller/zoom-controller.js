import './style/zoom-controller.sass'
import React from 'react'
import CommonCloseButton from '../common-close-button/common-close-btn'

/**
 * @param {{ isZoomingIn: boolean; setZoomingIn: Function; src?: string; style: any;}} props
 */
export default function ZoomController(props) {
  const {
    isZoomingIn, 
    setZoomingIn, 
    src, 
    style
  } = props

  function closeZoomCanvas() {
    setZoomingIn(false)
  }

  return (
    <>
      {
        isZoomingIn &&
        <div className="zoom-controller"
          style={{...style}}
        >
          <CommonCloseButton
            style={{backgroundColor: 'rgb(255, 255, 255)'}}
            onClick={(closeZoomCanvas)}
          />
          <img 
            className="zoom-img-src"
            src={src}
          />
        </div>
      }
    </>
  )
}