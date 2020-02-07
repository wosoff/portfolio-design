import './style/sidebar-content-work.sass'
import React from 'react'
import ImageViewer from '../image-viewer/image-viewer'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarContentWork() {
  return (
    <div className="sidebar-content-work">
      <div className="layout-work-portfolio-1">
        <ImageViewer 
          src="public/assets/images/portfolio-1.jpg"
          description={selectLanguage({
            en: 'The Ape',
            ko: '자연스러운 영장류, 우리는'
          })}
          style={{width: '65%', height: '65%'}}
        />
      </div>
      <div className="layout-work-portfolio-2">
        <ImageViewer 
          src="public/assets/images/portfolio-2.jpg"
          description={selectLanguage({
            en: 'The Yun Yang Gangs Of Mondrian',
            ko: '더 연양갱스 오브 몬드리안'
          })}
          style={{width: '70%', height: '70%'}}
        />
      </div>
    </div>
  )
}
