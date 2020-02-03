import './style/sidebar-tech-frontend.sass'
import React from 'react'
import TechRangeGradientBar from '../tech-range-gradient-bar/tech-range-gradient-bar'

export default function SidebarTechFrontend() {
  const deg90 = 90
  const colorToMiddleSkill = ['white', 'yellow']
  const colorToHighSkill = ['white', 'yellow','red']
  
  return (
    <div className="tech-frontend">
      <div>Web Programming Frontend</div>
      <div className="tech-frontend-html">
        <TechRangeGradientBar 
          title='HTML' deg={deg90} colors={colorToHighSkill}
        />
      </div>
      <div className="tech-frontend-css">
        <TechRangeGradientBar
          title="CSS" deg={deg90} colors={colorToHighSkill}
        />
      </div>
      <div className="tech-frontend-jquery">
        <TechRangeGradientBar
          title="JQuery" deg={deg90} colors={colorToHighSkill}
        />
      </div>
      <div className="tech-frontend-animation">
        <TechRangeGradientBar
          title="Web Animation" deg={deg90} colors={colorToMiddleSkill}
        />
      </div>
      <div className="tech-frontend-react">
        <TechRangeGradientBar
          title="React" deg={deg90} colors={colorToHighSkill}
        />
      </div>
    </div>
  )
}