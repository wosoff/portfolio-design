import './style/sidebar.sass'
import React from 'react'
import ClassNames from 'classnames'
import SidebarMembers from '../sidebar-members/sidebar-members'
import CommonCloseBtn from '../common-close-button/common-close-btn'

/**
 * @param {{ onSidebar: any; onToggleSidebarClassName: Function; }} props
 */
export default function Sidebar(props) {
  const {onSidebar, onToggleSidebarClassName} = props

  function closeSidebar() {
    onToggleSidebarClassName()
  }

  const className = ClassNames('sidebar', {
    'show-sidebar': onSidebar === true
  })

  return (
    <div className={className}>
      <CommonCloseBtn onClick={closeSidebar} />
      <div className="sidebar-members-layout">   
        <SidebarMembers />
      </div>
    </div>
  )
}