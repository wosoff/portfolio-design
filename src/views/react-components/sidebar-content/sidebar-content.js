import './style/sidebar-content.sass'
import React from 'react'
import ClassNames from 'classnames'
import SidebarContentWork from '../sidebar-content-work/sidebar-content-work'
import SidebarContentTech from '../sidebar-content-tech/sidebar-content-tech'
import SidebarContentHistory from '../sidebar-content-history/sidebar-content-history'
/**
 * @param {{ indexToTabBtn: number; }} props
 */
export default function SidebarContent(props) {
  const {indexToTabBtn} = props
  
  /**
   * @param {number} indexToContent
   */
  const ClassNamesBound = (indexToContent) =>  ClassNames({
    'show-sidebar-content': indexToContent === indexToTabBtn
  })

  return (
    <div className="sidebar-content">
      <div className={`content-tech-wrapper ${ClassNamesBound(0)}`}>
        <SidebarContentTech />
      </div>
      <div className={`content-work-wrapper ${ClassNamesBound(1)}`}>
        <SidebarContentWork />
      </div>
      <div className={`content-history-wrapper ${ClassNamesBound(2)}`}>
        <SidebarContentHistory />
      </div>
    </div>
  )
}