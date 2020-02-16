import './style/hamburger-menu.sass'
import React from 'react'
import ClassNames from 'classnames' 

/**
 * @param {{ onClick: any; onRef: any; onCollapsedMain: any, barStyle?: import('react').CSSProperties; outLineStyle?: import('react').CSSProperties}} props
 */
export default function HamburgerMenu(props) {
  const {onClick, onRef, onCollapsedMain, barStyle, outLineStyle} = props


  const classNames = ClassNames('hamburger-menu', {
    'stop-menu-flicking': onCollapsedMain === true
  })

  return (
    <div className={classNames}
      ref={onRef}
      onClick={() => {
        onClick()
      }}
      style={{...outLineStyle}}
    >
      <div className="hamburger-menu-bar-top" style={{...barStyle}}></div>
      <div className="hamburger-menu-bar-middle" style={{...barStyle}}></div>
      <div className="hamburger-menu-bar-bottom" style={{...barStyle}}></div>
    </div>
  )
}
