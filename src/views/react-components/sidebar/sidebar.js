import './style/sidebar.sass'
import React, { useState } from 'react'
import ClassNames from 'classnames'
import SidebarMembers from '../sidebar-members/sidebar-members'
import CommonCloseBtn from '../common-close-button/common-close-btn'

/**
 * @param {{ onSidebar: any; onToggleSidebarClassName: Function; }} props
 */
export default function Sidebar(props) {
  const {onSidebar, onToggleSidebarClassName} = props

  const [indexToTabBtn, setIndexToSidebarTab] = useState(0);

  function initSidebarTab() {
    setIndexToSidebarTab(0)
  }

  function closeSidebar() {
    initSidebarTab()
    onToggleSidebarClassName()
  }

  const className = ClassNames('sidebar', {
    'show-sidebar': onSidebar === true
  })

  return (
    <div className={className}>
      <CommonCloseBtn 
        onClick={closeSidebar} 
      />
      <div className="sidebar-members-container">
        <SidebarMembers 
          indexToTabBtn={indexToTabBtn}
          setIndexToSidebarTab={setIndexToSidebarTab}
        />
      </div>
    </div>
  )
}