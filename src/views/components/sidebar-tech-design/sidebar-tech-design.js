import './style/sidebar-tech-design.sass'
import React from 'react'
import TechRangeGradientBar from '../tech-range-gradient-bar/tech-range-gradient-bar'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarTechDesign() {
  const deg90 = 90
  const colorToMiddleSkill = ['white', 'yellow']
  const colorToHighSkill = ['white', 'yellow','red']

  // Must add to detail, as link, for what your skill is!!
  return (
    <div className="tech-design">
      <div>{selectLanguage({
          en: 'Design',
          ko: '디자인'
        })}
      </div>
      <div className="tech-design-photoshop">
        <TechRangeGradientBar 
          title={selectLanguage({en: 'Photoshop', ko: '포토샵'})} 
          deg={deg90} 
          colors={colorToHighSkill}
        />
      </div>
      <div className="tech-design-illustrator">
        <TechRangeGradientBar 
          title={selectLanguage({en: 'Illustrator', ko: '일러스트레이터'})}
          deg={deg90} 
          colors={colorToMiddleSkill}
        />
      </div>
      <div className="tech-design-aftereffect">
        <TechRangeGradientBar 
          title={selectLanguage({en: 'After Effects', ko: '애프터 이펙트'})}  
          deg={deg90} 
          colors={colorToMiddleSkill}
        />
      </div>
    </div>
  )
}