import React from 'react'
import './style/common-close-btn.sass'

/**
 * @param {{ onClick: Function, style?: import('react').CSSProperties;}} props
 */
export default function CommonCloseBtn(props) {

  const {onClick, style} = props

  return (
    <div
      className='common-close-button'
      onClick={() => {onClick()}}
    >
      <div id="common-close-button-fragment-1" style={{...style}}></div>
      <div id="common-close-button-fragment-2" style={{...style}}></div>
    </div>
  )
}