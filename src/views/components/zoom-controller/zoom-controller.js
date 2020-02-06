import './style/zoom-controller.sass'
import React from 'react'
import ClassNames from 'classnames'
import CommonCloseButton from '../common-close-button/common-close-btn'

/**
 * @param {{ isOnZoomButton: boolean; clickZoomButton: Function; src?: string; width: string; height: string}} props
 */
export default function ZoomController(props) {
  const {isOnZoomButton, clickZoomButton, src, 
    width, height
  } = props

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
        <div className="zoom-canvas">
          <img 
            src={src}
            width={width}
            height={height}
          />
        </div>
      </div>
    </div>
  )
}