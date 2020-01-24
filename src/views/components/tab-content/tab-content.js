import React from 'react'
import './style/tab-content.sass'

export default function TabContent() {
  return (
    <div className="sidebar-tab-content">
      <div className="content-work">content of work</div>
      <div className="content-tech">content of tech</div>
      <div className="content-history"> content of history</div>
    </div>
  )
}