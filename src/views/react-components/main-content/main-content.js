import './style/main-content.sass'
import React, {useRef, useEffect} from 'react'
import ClassNames from 'classnames'
import HamburgerMenu from '../hamburger-menu/hamburger-menu'
import AboutMe from '../about-me/about-me'
import ContactMe from '../contact-me/contact-me'

/**
 * @param {{ onCollapsedMain: boolean; onToggleSidebarClassName: Function; }} props
 */
export default function MainContent(props) {
  const {onCollapsedMain, onToggleSidebarClassName} = props

  const textAreaRef = useRef(null)
  const classToTransFormMenuIcon = 'transform-menu-icon'

  useEffect(() => {
    if (onCollapsedMain ===  false && textAreaRef !== null) {
      // @ts-ignore
      const {classList} = textAreaRef.current
      classList.remove(classToTransFormMenuIcon)
    }
  })

  function transformMenuIcon() {
    // @ts-ignore
    const {classList} = textAreaRef.current
    classList.add(classToTransFormMenuIcon)
  }

  function openSidebarBtn() {
    onToggleSidebarClassName()
    transformMenuIcon()
  }
  
  const className = ClassNames('main-content', {
    'collapsed-main-content': onCollapsedMain === true
  })

  return (
    <div className={className}>
      <HamburgerMenu 
        onCollapsedMain={onCollapsedMain}
        onRef={textAreaRef}
        onClick={openSidebarBtn}
        outLineStyle={{marginTop: '1vw', marginLeft: '1vw'}}
        barStyle={{backgroundColor: 'rgb(255, 255, 255)'}}
      />
      <ContactMe
        isCollapsedMain={onCollapsedMain}
        layoutStyle={{top: '50vh'}}
      />
      <AboutMe 
        isCollapsedMain={onCollapsedMain}
        layoutStyle={{top: '33vh'}}
      />
    </div>
  )
}
