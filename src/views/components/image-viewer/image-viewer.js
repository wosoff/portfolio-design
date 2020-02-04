import './style/image-viewer.sass'
import React from 'react'

/**
 * @param {{ src: string; width?: number; height?: number; }} props
 */
export default function ImageViewer(props) {
  const {src, width, height} = props

  const defaultStyleValue = ""
  const styleW = typeof width === 'number' 
    ? width.toString() + 'px' 
    : defaultStyleValue

  const styleH = typeof height === 'number' 
    ? height.toString() + 'px'
    : defaultStyleValue

  return (
    <div 
      className="image-viewer align-children-at-img-viewer"
      style={{width: styleW, height: styleH}}
    >
      <div className="image-viewer-frame align-children-at-img-viewer">
        <img 
          className="image-viewer-src"
          src={src}
        />
      </div>
    </div>
  )
}