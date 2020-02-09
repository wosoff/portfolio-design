import './style/tech-range-gradient-bar.sass'
import React from 'react'

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
      <div
        className="tech-range-bar"
        style={{
          backgroundImage: `linear-gradient(90deg, ${gradientStyleValues})`
        }}>
      </div>
    </div>
  )
}