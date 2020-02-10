import './style/tech-range-gradient-bar.sass'
import React from 'react'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{deg?: number, level: string}} props 
 */
export default function TechRangeGradientBar({level}) {
  const gradientColorsToSkill = {
    'middle': ['white', 'yellow'],
    'high': ['white', 'yellow','red']
  }

  const gradientStyleValues = gradientColorsToSkill[level].join(', ')

  return (
    <div className="tech-range-gradient-bar">
      {
        level === 'middle' 
          ? selectLanguage({en: 'Medium Level', ko: '중급'})
          : selectLanguage({en: 'Advanced Level', ko: '고급'})
      }
      <div
        className="tech-range-bar"
        style={{
          backgroundImage: `linear-gradient(90deg, ${gradientStyleValues})`
        }}>
      </div>
    </div>
  )
}