import './style/sidebar-members.sass'
import React from 'react'
import SidebarTab from '../sidebar-tab/sidebar-tab'
import SidebarContent from '../sidebar-content/sidebar-content'

/**
 * @param {{ indexToTabBtn: number; setIndexToSidebarTab: Function; }} props
 */
export default function SidebarMembers(props) {
  const {indexToTabBtn, setIndexToSidebarTab} = props

  const tabContentTitles = ['Work', 'Tech', 'History']

  return (
    <div className="sidebar-members">
      <div className="layout-sidebar-tab">
        <SidebarTab 
          setIndexToSidebarTab={setIndexToSidebarTab} 
          tabContentTitles={tabContentTitles}
        />
      </div>
      <div className="layout-sidebar-content">
        <SidebarContent 
          indexToTabBtn={indexToTabBtn}
        />
      </div>
    </div>
  )
}