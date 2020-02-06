import './style/sidebar-tech-frontend.sass'
import React from 'react'
import TechRangeGradientBar from '../tech-range-gradient-bar/tech-range-gradient-bar'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarTechFrontend() {
  const deg90 = 90
  const colorToMiddleSkill = ['white', 'yellow']
  const colorToHighSkill = ['white', 'yellow','red']
  
  return (
    <div className="tech-frontend">
      <div>
        {selectLanguage({
          en: 'Web Programming Frontend', ko: '웹 프로그래밍 프론트엔드 (브라우저 관련 프로세싱)'
        })}
      </div>
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
          title={selectLanguage({en: 'JQuery', ko: '제이쿼리'})}
          deg={deg90} 
          colors={colorToHighSkill}
        />
      </div>
      <div className="tech-frontend-animation">
        <TechRangeGradientBar
          title={selectLanguage({en: 'Web Animation', ko: '웹 애니메이션'})} 
          deg={deg90} 
          colors={colorToMiddleSkill}
        />
      </div>
      <div className="tech-frontend-react">
        <TechRangeGradientBar
          title={selectLanguage({en: 'React', ko: '리액트'})}
          deg={deg90} 
          colors={colorToHighSkill}
        />
      </div>
    </div>
  )
}