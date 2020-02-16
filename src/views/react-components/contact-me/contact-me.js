import './style/contact-me.sass'
import React , {useEffect, useState} from 'react'
import ClassNames from 'classnames'
import selectLanguage from '../../helpers/selectLanguage'
import ContactMeFixedWindow from '../contact-me-fixed-window/contact-me-fixed-window'
/**
 * @typedef {import('react').CSSProperties} ReactCSSProp 
 */
/**
 * @param {{isCollapsedMain: boolean; layoutStyle?: ReactCSSProp; titleStyle?: ReactCSSProp; underBarStyle?: ReactCSSProp; }} props
 */
export default function ContactMe(props) {
  const {isCollapsedMain, layoutStyle, titleStyle, underBarStyle} = props

  const [isClickedContact, setIsClickedContact] = useState(false)
  const [isAnimationEnd, setIsAnimationEnd] = useState(false)

  useEffect(() => {
    if (isCollapsedMain === true) {
      setIsClickedContact(false)
    }
  })

  const classNames = ClassNames('contact-me', {
    'init-contact-after-animation': isAnimationEnd == true
  })

  return (
    <>
    <div 
      className={classNames} 
      style={layoutStyle}
      onAnimationEnd={() => {setIsAnimationEnd(true)}}
    >
      <button className="contact-me-title" 
        onClick={() => {setIsClickedContact(true)}}
        style={titleStyle}
      >
        {selectLanguage({
          en: 'Contact',
          ko: '연락처'
        })}
      </button>
      <div className="contact-me-under-bar" style={underBarStyle}></div>
     
      {
        isCollapsedMain === false && isClickedContact === true &&  
        <ContactMeFixedWindow 
          isCollapsedMain={isCollapsedMain}
          isClickedContact={isClickedContact}
          setIsClickedContact={setIsClickedContact}
        />
      }
    </div>
    </>
  )
}