import './style/web-animation-logo.sass'
import React from 'react'

/**
 * @param {{ layoutStyle?: import('react').CSSProperties; }} props
 */
export default function WebAnimationLogo(props) {
  const {layoutStyle} = props
  return (
    <div className="web-animation-logo" style={{...layoutStyle}}>
      <div className="wal-top-left"></div>
      <div className="wal-top-right"></div>
      <div className="wal-bottom-left"></div>
      <div className="wal-bottom-right"></div>
      <div className="layout-wal-title">
        <div className="wal-title">Web</div>
        <div className="wal-title">Motion</div>
      </div>
    </div>
  )
}