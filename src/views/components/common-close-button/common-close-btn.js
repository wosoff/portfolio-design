import React from 'react'
import './style/common-close-btn.sass'

/**
 * @param {{ onClick: Function}} props
 */
export default function CommonCloseBtn(props) {
  const {onClick} = props

  return (
    <div
      id='close-sidebar'
      onClick={() => {
        onClick()
      }}
    >
      <div id="close-sidebar-fragment-1"></div>
      <div id="close-sidebar-fragment-2"></div>
    </div>
  )
}