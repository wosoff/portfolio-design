import './style/sidebar-content-work.sass'
import React from 'react'
import ImageViewer from '../image-viewer/image-viewer'

export default function SidebarContentWork() {
  return (
    <div className="sidebar-content-work align-children-at-sidebar-content-work">
      <div className="layout-work-portfolio-1 align-children-at-sidebar-content-work">
        <p>Test Portfoliio</p>
        <p>Portfolio 1</p>
        <ImageViewer 
          src="public/assets/images/portfolio-1.jpg"
        />
        <p>
          This Portfolio means that i am human and ape!
        </p>  
      </div>
      <div className="layout-work-portfolio-2 align-children-at-sidebar-content-work">
        <p>Portfolio 2</p>
        <ImageViewer 
          src="public/assets/images/portfolio-2.jpg"
        />
        <p>
          This Portfolio It is mondrian!
        </p>  
      </div>
    </div>
  )
}