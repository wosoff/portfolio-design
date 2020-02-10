import './style/sidebar-content-work.sass'
import React from 'react'
import {IMAGE_PATH} from '../../var/PUBLIC_PATH'
import ImageViewer from '../image-viewer/image-viewer'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarContentWork() {
  return (
    <div className="sidebar-content-work">
      <div className="layout-work-portfolio-1">
        <ImageViewer 
          src={IMAGE_PATH.WORK_PORTFOLIO_1}
          description={selectLanguage({
            en: 'The Ape',
            ko: '자연스러운 영장류, 우리는'
          })}
        />
      </div>
      <div className="layout-work-portfolio-2">
        <ImageViewer 
          src={IMAGE_PATH.wORK_PORTfOLIO_2}
          description={selectLanguage({
            en: 'The Yun Yang Gangs Of Mondrian',
            ko: '더 연양갱스 오브 몬드리안'
          })}
        />
      </div>
    </div>
  )
}
