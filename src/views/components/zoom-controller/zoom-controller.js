import './style/zoom-controller.sass'
import React from 'react'
import ClassNames from 'classnames'
import CommonCloseButton from '../common-close-button/common-close-btn'

/**
 * @param {{ src?: string|undefined; ComponentToZoomIN?: Function;}} props
 */
function ZoomCanvas(props) {
  const {src, ComponentToZoomIN} = props

  if (typeof src === 'string') {
    return (
      <div 
        className="zoom-canvas"
      >
        <img 
          src={src}
        />
      </div>
    )
  }

  return (
    <div className="zoom-canvas">
      // @ts-ignore
      <ComponentToZoomIN />
    </div>
  )
}

/**
 * @param {{ isOnZoomButton: boolean; clickZoomButton: Function; src?: string; ComponentToZoomIN?: Function;}} props
 */
export default function ZoomController(props) {
  const {isOnZoomButton, clickZoomButton, src, ComponentToZoomIN} = props

  const className = ClassNames('zoom-controller', {
    'show-zoom-in-controller': isOnZoomButton === true
  })

  function closeZoomCanvas() {
    clickZoomButton(false)
  }

  return (
    <div className={className}>
      <CommonCloseButton onClick={closeZoomCanvas}/>

      <div className="zoom-in-frame">
        <ZoomCanvas src={src} ComponentToZoomIN={ComponentToZoomIN}/>
      </div>
    </div>
  )
}