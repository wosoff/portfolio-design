import './style/sidebar-members.sass'
import React, { useState } from 'react'
import SidebarTab from '../sidebar-tab/sidebar-tab'
import SidebarContent from '../sidebar-content/sidebar-content'

export default function SidebarMembers() {
  const [indexToTabBtn, setIndex] = useState(0);
  const tabContentTitles = ['Work', 'Tech', 'History']

  return (
    <div className="sidebar-members">
      <div className="sidebar-tab-layout">
        <SidebarTab 
          setIndex={setIndex} 
          tabContentTitles={tabContentTitles}
        />
      </div>
      <div className="sidebar-content-layout">
        <SidebarContent 
          indexToTabBtn={indexToTabBtn}
        />
      </div>
    </div>
  )
}