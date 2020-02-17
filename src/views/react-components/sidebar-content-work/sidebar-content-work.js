import './style/sidebar-content-work.sass'
import React from 'react'
import {IMAGE_PATH} from '../../var/PUBLIC_PATH'
import ImageViewer from '../image-viewer/image-viewer'
import selectLanguage from '../../helpers/selectLanguage'

export default function SidebarContentWork() {
  return (
    <div className="sidebar-content-work">
      <div className="layout-work-portfolio-1 layout-work-portfolio">
        <ImageViewer 
          src={IMAGE_PATH.WORK_PORTFOLIO_1}
          description={selectLanguage({
            en: 'No son remember his mama',
            ko: '아들은 마마를 기억하지 않는다'
          })}
        />
      </div>
      <div className="layout-work-portfolio-2 layout-work-portfolio">
        <ImageViewer 
          src={IMAGE_PATH.wORK_PORTfOLIO_2}
          description={selectLanguage({
            en: 'The Yun Yang Gangs Of Mondrian; A renewer of Yun Yang Gangs',
            ko: '더 연양갱스 오브 몬드리안; 연양갱 리뉴얼'
          })}
        />
      </div>
    </div>
  )
}
