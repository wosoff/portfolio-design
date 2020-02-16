import './style/common-tech-range-bar.sass'
import React from 'react'
import ClassNames from 'classnames'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ isAdvanced: boolean; layoutStyle?: import('react').CSSProperties; }} props
 */
export default function CommonTechRangeBar(props) {
  const {isAdvanced, layoutStyle} = props

  const classNames = ClassNames('ctr-bar', {
    'ctr-bar-medium': isAdvanced !== true
  })
  return (
    <div className="common-tech-range-bar" style={layoutStyle}>
      <div className={classNames}></div>
      <div className="ctr-title">{
        isAdvanced === true 
          ? selectLanguage({en: 'Advanced', ko: '고급'})
          : selectLanguage({en: 'Medium', ko: '중급' }) 
      }</div>
    </div>
  )
}