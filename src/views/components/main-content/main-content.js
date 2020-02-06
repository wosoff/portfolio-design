import './style/main-content.sass'
import React, {useRef, useEffect} from 'react'
import ClassNames from 'classnames'
import selectLanguage from '../../helpers/selectLanguage'

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
      <div 
        className="main-menu-icon" 
        ref={textAreaRef}
        onClick={openSidebarBtn}
      >
        <div className="menu-icon-first-bar"></div>
        <div className="menu-icon-second-bar"></div>
        <div className="menu-icon-third-bar"></div>
      </div>
      <div className='content'>
        <p>
          {selectLanguage({
            en: 'Main Content',
            ko: '메인 콘텐츠'
          })}
        </p>
      </div>
    </div>
  )
}
