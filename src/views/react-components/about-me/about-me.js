import './style/about-me.sass'
import React, {useState, useEffect} from 'react'
import selectLanguage from '../../helpers/selectLanguage'
import AboutMeFixedWindow from '../about-me-fixed-window/about-me-fixed-window'

/**
 * @typedef {import('react').CSSProperties} ReactCSSProp 
 */
/**
 * @param {{isCollapsedMain: boolean; layoutStyle?: ReactCSSProp; titleStyle?: ReactCSSProp; underBarStyle?: ReactCSSProp; }} props
 */
export default function AboutMe(props) {
  const {isCollapsedMain, layoutStyle, titleStyle, underBarStyle} = props

  const [isClickedAboutMe, setIsClickedAboutMe] = useState(false)

  useEffect(() => {
    if (isCollapsedMain === true) {
      setIsClickedAboutMe(false)
    }
  })

  return (
    <>
    <div 
      className="about-me" 
      style={layoutStyle}  
      onClick={() =>{
        setIsClickedAboutMe(true)
      }}>
      <button className="about-me-title" 
        style={titleStyle}
        onClick={() =>{
          setIsClickedAboutMe(true)
        }}
      >
        {selectLanguage({
          en: 'About Me', 
          ko: '소개'
        })}
      </button>
      <div className="about-me-under-bar" style={underBarStyle}></div>
    </div>
      {
        isCollapsedMain === false && isClickedAboutMe === true && 
        <AboutMeFixedWindow 
          isClickedAboutMe={isClickedAboutMe}
          isCollapsedMain={isCollapsedMain}
          setIsClickedAboutMe={setIsClickedAboutMe}
        />
      }
    </>
  )
}