import React from 'react'
import './style/common-close-btn.sass'

/**
 * @param {{ onClick: Function, position?: {top?: any, right?: any, bottom?: any, left?: any}}} props
 */
export default function CommonCloseBtn(props) {
  let topValue
  let rightValue
  let bottomValue
  let leftValue
  
  const {onClick, position} = props
  if (position !== undefined) {
    const {top, right, bottom, left} = position
    topValue = top !== undefined ? top : ''
    rightValue = right !== undefined ? right : ''
    bottomValue = bottom !== undefined ?  bottom : ''
    leftValue = left !== undefined ? left : ''
  }

  return (
    <div
      className='common-close-button'
      onClick={() => {
        onClick()
      }}
      style={{
        top: topValue,
        right: rightValue,
        bottom: bottomValue,
        left: leftValue
      }}
    >
      <div id="common-close-button-fragment-1"></div>
      <div id="common-close-button-fragment-2"></div>
    </div>
  )
}