import React from 'react'
import './style/tab-btn.sass'

export default function TabBtn() {
  return (
    <div className="sidebar-tab-btn">
      <button
        id="tab-work"
      >
        Work
      </button>
      <button
        id="tab-tech"
      >
        Tech
      </button>
      <button
        id="tab-history"
      >
        History
      </button>
    </div>
  )
}