import './style/sidebar-tech-design.sass'
import React from 'react'
import TechRangeGradientBar from '../tech-range-gradient-bar/tech-range-gradient-bar'

export default function SidebarTechDesign() {
  const deg90 = 90
  const colorToMiddleSkill = ['white', 'yellow']
  const colorToHighSkill = ['white', 'yellow','red']


  // Must add to detail, as link, for what your skill is!!

  return (
    <div className="tech-design">
      <div>Design</div>
      <div className="tech-design-photoshop">
        <TechRangeGradientBar 
          title='Photoshop' deg={deg90} colors={colorToHighSkill}
        />
      </div>
      <div className="tech-design-illustrator">
        <TechRangeGradientBar 
          title='Illustrator' deg={deg90} colors={colorToMiddleSkill}
        />
      </div>
      <div className="tech-design-aftereffect">
        <TechRangeGradientBar 
          title='After Effects' deg={deg90} colors={colorToMiddleSkill}
        />
      </div>
    </div>
  )
}