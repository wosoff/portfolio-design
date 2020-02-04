import './style/sidebar-content.sass'
import React from 'react'
import ClassNames from 'classnames'
import SidebarContentWork from '../sidebar-content-work/sidebar-content-work'
import SidebarContentTech from '../sidebar-content-tech/sidebar-content-tech'

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
      <div className={`content-work-wrapper ${ClassNamesBound(0)}`}>
        <SidebarContentWork />
      </div>
      <div className={`content-work-wrapper ${ClassNamesBound(1)}`}>
        <SidebarContentTech />
      </div>
      <div className={`content-work-wrapper ${ClassNamesBound(2)}`}>
        Content Of History
      </div>
    </div>
  )
}