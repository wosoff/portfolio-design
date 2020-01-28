import React from 'react'
import ClassNames from 'classnames'
import SidebarContentTech from '../sidebar-content-tech/sidebar-content-tech'

import './style/sidebar-content.sass'

export default function SidebarContent(props) {
  const {indexToTabBtn} = props
  
  const ClassNamesBound = (indexToContent) =>  ClassNames({
    'show-sidebar-content': indexToContent === indexToTabBtn
  })

  return (
    <div className="sidebar-content">
      <div className={ClassNamesBound(0)}>
        Content Of Work
      </div>
      <div className={ClassNamesBound(1)}>
        <SidebarContentTech />
      </div>
      <div className={ClassNamesBound(2)}>
        Content Of History
      </div>
    </div>
  )
}