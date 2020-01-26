import React from 'react'
import './style/sidebar-tab-btn.sass'

export default function SidebarTabBtn(props) {
  const {setIndex, tabContentTitles} = props

  const tabButtons = tabContentTitles.map((title, indexToTitle) => (
    <button
      key={title.toLowerCase() + '-' + indexToTitle}
      id={'tab-btn-'+ title.toLowerCase()}
      onClick={() => {setIndex(indexToTitle)}}
    >
      {title}
    </button>
  ))

  return (
    <div className="sidebar-tab-btn">
      {tabButtons}
    </div>
  )
}