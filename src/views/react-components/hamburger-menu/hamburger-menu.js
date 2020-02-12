import './style/hamburger-menu.sass'
import React from 'react'
import ClassNames from 'classnames' 

/**
 * @param {{ onClick: any; onRef: any; onCollapsedMain: any}} props
 */
export default function HamburgerMenu(props) {
  const {onClick, onRef, onCollapsedMain} = props


  const classNames = ClassNames('hamburger-menu', {
    'stop-menu-flicking': onCollapsedMain === true
  })

  return (
    <div className={classNames}
      ref={onRef}
      onClick={() => {
        onClick()
      }}
    >
      <div className="hamburger-menu-bar-top"></div>
      <div className="hamburger-menu-bar-middle"></div>
      <div className="hamburger-menu-bar-bottom"></div>
    </div>
  )
}
