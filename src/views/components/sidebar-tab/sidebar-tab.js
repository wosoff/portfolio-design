import React, { useState } from 'react'
import SidebarTabBtn from '../sidebar-tab-btn/sidebar-tab-btn'
import SidebarContent from '../sidebar-content/sidebar-content'
import './style/sidebar-tab.sass'

export default function SidebarTab() {
  const [indexToTabBtn, setIndex] = useState(0);
  const tabContentTitles = ['Work', 'Tech', 'History']

  return (
    <div className="sidebar-tab">
      <SidebarTabBtn 
        setIndex={setIndex} 
        tabContentTitles={tabContentTitles}
      />
      <SidebarContent 
        indexToTabBtn={indexToTabBtn}
        tabContentTitles={tabContentTitles}
      />
    </div>
  )
}