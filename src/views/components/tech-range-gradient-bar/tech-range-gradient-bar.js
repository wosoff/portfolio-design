import './style/tech-range-gradient-bar.sass'
import React from 'react'

/**
 * @param {{title: string, deg: number, colors: string[]}} props 
 */
export default function TechRangeGradientBar({title, deg=0, colors}) {
  const gradientStyleValues = colors.join(', ')

  return (
    <div className="tech-range-gradient-bar">
      <div className="tech-title">{title}</div>
      <div
        className="tech-bar"
        style={{
          backgroundImage: `linear-gradient(${deg}deg, ${gradientStyleValues})`
        }}>
      </div>
    </div>
  )
}