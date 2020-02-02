import './style/sidebar.sass'
import React from 'react'
import ClassNames from 'classnames'
import SidebarTab from '../sidebar-tab/sidebar-tab'
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
      <div className={"sidebar-close-btn-wrapper"}>
        <CommonCloseBtn onClick={closeSidebar} />
      </div>
      <SidebarTab />
    </div>
  )
}