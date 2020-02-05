import './style/sidebar-content-work.sass'
import React from 'react'
import ArtObjViewer from '../art-obj-viewer/art-obj-viewer'

export default function SidebarContentWork() {
  return (
    <div className="sidebar-content-work">
      <div className="layout-work-portfolio-1">
        <ArtObjViewer 
          workSrc="public/assets/images/portfolio-1.jpg"
          description={'Hello World!'}
        />
      </div>
      
      <div className="layout-work-portfolio-2">
        <ArtObjViewer 
          workSrc="public/assets/images/portfolio-2.jpg"
          description={'It is Mondrian'}
        />
      </div>
    </div>
  )
}
