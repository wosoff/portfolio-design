import React from 'react'
import ClassNames from 'classnames'
import './style/sidebar-content.sass'

export default function SidebarContent(props) {
  const {indexToTabBtn, tabContentTitles} = props

  const tabContent = tabContentTitles.map((title, indexToTitle) => {
    const lowerTitle = title.toLowerCase()

    const className = ClassNames('content-' + lowerTitle, {
      'show-sidebar-content': indexToTabBtn === indexToTitle
    })

    return (
      <div 
        key={indexToTitle + '-' + lowerTitle}
        className={className}
      >
        {'Content of ' + title}
      </div>
    )
  })

  return (
    <div className="sidebar-content">
      {tabContent}
    </div>
  )
}