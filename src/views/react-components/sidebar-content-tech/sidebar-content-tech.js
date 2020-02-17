import './style/sidebar-content-tech.sass'
import React from 'react'
import {designTechItems, frontendTechItems, backendTechItems} from '../../var/TECH_ITEM_LIST'
import selectLanguage from '../../helpers/selectLanguage'
import ContentTechItemController from '../content-tech-item-controller/content-tech-item-controller'

/**
 * @param {{ en: string; ko: string; }} props
 */
function TechTitle(props) {
  const {en, ko} = props
  
  return (
    <div className="sidebar-content-tech-title">
      {selectLanguage({
        en: en, 
        ko: ko
      })}
    </div>
  )
}

export default function SidebarContentTech() {
  return (
    <div className="sidebar-content-tech">
      <div className="sidebar-tech-design-layout">
        <TechTitle 
          en="Design"
          ko="디자인"
        />
        <div className="sidebar-content-tech-items">
          <ContentTechItemController 
            techItems={designTechItems}
          />
        </div>
      </div>

      <div className="sidebar-tech-frontend-layout">
        <TechTitle 
          en='Web Programming Browser'
          ko='웹 프로그래밍 브라우저'
        />
        <div className="sidebar-content-tech-items">
          <ContentTechItemController 
            techItems={frontendTechItems}
          />
        </div>
      </div>

      <div className="sidebar-tech-backend-layout">
        <TechTitle 
          en='Web Programming Server'
          ko='웹 프로그래밍 서버'
        />
        <div className="sidebar-content-tech-items">
          <ContentTechItemController 
            techItems={backendTechItems}
          />
        </div>
      </div>
    </div>
  )
}