import './style/sidebar-content-work.sass'
import React from 'react'
import ArtObjViewer from '../art-obj-viewer/art-obj-viewer'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarContentWork() {
  return (
    <div className="sidebar-content-work">
      <div className="layout-work-portfolio-1">
        <ArtObjViewer 
          workSrc="public/assets/images/portfolio-1.jpg"
          description={selectLanguage({
            en: 'The Ape',
            ko: '자연스러운 영장류, 우리는'
          })
            
          }
        />
      </div>
      
      <div className="layout-work-portfolio-2">
        <ArtObjViewer 
          workSrc="public/assets/images/portfolio-2.jpg"
          description={selectLanguage({
            en: 'The Yun Yang Gangs Of Mondrian',
            ko: '더 연양갱스 오브 몬드리안'
          })}
        />
      </div>
    </div>
  )
}
