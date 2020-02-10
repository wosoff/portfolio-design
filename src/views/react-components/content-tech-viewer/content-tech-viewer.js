import './style/content-tech-viewer.sass'
import React from 'react'
import ContentTechItemController from '../content-tech-item-controller/content-tech-item-controller'

/**
 * @param {{techKind: string; techItemInfos: {title: string; level: any;}[]; gridViewerItems: {src: any; viewer: any}[]; }} props
 */
export default function SidebarTechDesign(props) {
  const {gridViewerItems, techItemInfos, techKind} = props


  const contentTechItems = techItemInfos.map((info) => {
    return (
      <div className="content-tech-viewer-item">
        <ContentTechItemController 
          techItemInfo={info}
          gridViewerItems={gridViewerItems}
        />
      </div>
    )
  })

  return (
    <div className="content-tech-viewer">
      <div className="content-tech-viewer-title">
        {techKind}
      </div>
      <div className="content-tech-viewer-list">
        {contentTechItems}
      </div>
    </div>
  )
}