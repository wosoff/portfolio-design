import './style/sidebar-tab.sass'
import React from 'react'

/**
 * @param {{ setIndexToSidebarTab: Function; tabContentTitles: string[]; }} props
 */
export default function SidebarTab(props) {
  const {setIndexToSidebarTab, tabContentTitles} = props

  const tabButtons = tabContentTitles.map((title, indexToTitle) => (
    <div
      key={title.toLowerCase() + '-' + indexToTitle}
      id={'tab-'+ title.toLowerCase()}
      onClick={() => {setIndexToSidebarTab(indexToTitle)}}
    >
      {title}
    </div>
  ))

  return (
    <div className="sidebar-tab">
      {tabButtons}
    </div>
  )
}