import './style/about-me-close-button.sass'
import React from 'react'

/**
 * @param {{ setIsClickedAboutMe: Function; elementStyle?: import('react').CSSProperties}} props
 */
export default function AboutMeCloseButton(props) {
  const {setIsClickedAboutMe, elementStyle} = props
  
  return (
    <div 
      className='about-me-close-button'
      onClick={() => {setIsClickedAboutMe(false)}}
    >
      <div id="about-me-close-button-fragment-1" style={{...elementStyle}}></div>
      <div id="about-me-close-button-fragment-2" style={{...elementStyle}}></div>
    </div>
  )
}
