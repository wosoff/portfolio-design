import React from 'react'
import './style/common-close-btn.sass'

/**
 * @param {{ onClick: Function, layoutStyle?: import('react').CSSProperties; fragmentStyle?: import('react').CSSProperties;}} props
 */
export default function CommonCloseBtn(props) {

  const {onClick, layoutStyle, fragmentStyle} = props

  return (
    <div
      className='common-close-button'
      onClick={() => {onClick()}}
      style={{...layoutStyle}}
    >
      <div id="common-close-button-fragment-1" style={{...fragmentStyle}}></div>
      <div id="common-close-button-fragment-2" style={{...fragmentStyle}}></div>
    </div>
  )
}