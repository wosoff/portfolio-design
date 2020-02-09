import './style/sidebar-content-tech.sass'
import React from 'react'
import ContentTechViewer from '../content-tech-viewer/content-tech-viewer'
import {designItems, frontendItems, backendItems} from '../../var/techItemList'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarContentTech() {
  return (
    <div className="sidebar-content-tech">
      <div className="tech-design-layout">
        <ContentTechViewer
          techKind={selectLanguage({en: 'Design', ko: '디자인'})}
          techItemInfos={designItems.infos}
          gridViewerItems={designItems.grid} 
        />
      </div>
      <div className="tech-frontend-layout">
        <ContentTechViewer
          techKind={selectLanguage({en: 'Web Programming Browser', ko: '웹 프로그래밍 브라우저'})}
          techItemInfos={frontendItems.infos}
          gridViewerItems={frontendItems.grid} 
        />
      </div>
      <div className="tech-backend-layout">
        <ContentTechViewer
          techKind={selectLanguage({en: 'Web Programming Server', ko: '웹 프로그래밍 서버'})}
          techItemInfos={backendItems.infos}
          gridViewerItems={backendItems.gird} 
        />
      </div>
    </div>
  )
}