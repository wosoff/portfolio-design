import './style/sidebar-tech-backend.sass'
import React from 'react'
import TechRangeGradientBar from '../tech-range-gradient-bar/tech-range-gradient-bar'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarTechBackend() {
  const deg90 = 90
  const colorToMiddleSkill = ['white', 'yellow']
  const colorToHighSkill = ['white', 'yellow','red']
  
  return (
    <div className="tech-backend">
      <span>
        {selectLanguage({
          ko: '웹 프로그래밍 백엔드(서버 관련 프로세싱)',
          en: 'Web Programming Backend'
        })}
      </span>
      <div className="tech-backend-nodejs">
        <TechRangeGradientBar 
          title="Node.js" 
          deg={deg90} 
          colors={colorToHighSkill}
        />
      </div>
      <div className="tech-backend-mongodb">
        <TechRangeGradientBar 
          title="Mongo Database" deg={deg90} colors={colorToMiddleSkill}
        />
      </div>
      <div className="tech-backend-AWS-EC2">
        <TechRangeGradientBar 
          title={selectLanguage({en: 'Amazon Web Services EC2', ko: '아마존 웹 서비스 EC2'})}  
          deg={deg90} 
          colors={colorToMiddleSkill}
        />
      </div>
    </div>
  )
}