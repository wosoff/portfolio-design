import './style/image-viewer.sass'
import React, {useState} from 'react'
import ClassNames from 'classnames'

/**
 * @param {{ src: string; width?: number; height?: number; clickZoomButton: Function}} props
 */
export default function ImageViewer(props) {
  const {src, width, height, clickZoomButton} = props

  const defaultStyleValue = ""
  const styleW = typeof width === 'number' 
    ? width.toString() + 'px' 
    : defaultStyleValue

  const styleH = typeof height === 'number' 
    ? height.toString() + 'px'
    : defaultStyleValue


  const [isOnZoomIn, setOnZoomIn] = useState(false)

  const classNames = ClassNames('image-viewer-zoom-btn', {
    'show-image-viewer-zoom-btn': isOnZoomIn === true
  })

  return (
    <div 
      className="image-viewer"
      style={{width: styleW, height: styleH}}  
    >
      <div className="image-viewer-frame">
        <img 
          className={"image-viewer-src"}
          src={src}
          onMouseOver={() => {
            setOnZoomIn(true)
          }}
        />
        <button 
          className={classNames}
          onMouseOut={() => {setOnZoomIn(false)}}
          onClick={() => {clickZoomButton(true)}}
        > 
          Click!
        </button>
      </div>
    </div>
  )
}
