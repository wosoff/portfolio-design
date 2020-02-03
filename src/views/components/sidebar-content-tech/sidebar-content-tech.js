import './style/sidebar-content-tech.sass'
import React from 'react'
import SidebarTechDesign from '../sidebar-tech-design/sidebar-tech-design'
import SidebarTechFrontend from '../sidebar-tech-frontend/sidebar-tech-frontend'
import SidebarTechBackend from '../sidebar-tech-backend/sidebar-tech-backend'

export default function SidebarContentTech() {
  return (
    <div className="sidebar-content-tech">
      <div className="tech-design-layout"><SidebarTechDesign /></div>
      <div className="tech-frontend-layout"><SidebarTechFrontend /></div>
      <div className="tech-backend-layout"><SidebarTechBackend /></div>
    </div>
  )
}