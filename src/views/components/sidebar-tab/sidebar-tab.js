import './style/sidebar-tab.sass'
import React from 'react'

/**
 * @param {{ setIndex: Function; tabContentTitles: string[]; }} props
 */
export default function SidebarTab(props) {
  const {setIndex, tabContentTitles} = props

  const tabButtons = tabContentTitles.map((title, indexToTitle) => (
    <div
      key={title.toLowerCase() + '-' + indexToTitle}
      id={'tab-'+ title.toLowerCase()}
      onClick={() => {setIndex(indexToTitle)}}
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