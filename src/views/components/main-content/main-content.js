import React from 'react'
import ClassNames from 'classnames'
import './style/main-content.sass'

const HandlerOpenSidebarBtn = props => () => {
  props.onToggleSidebarClassName()
}

export default function MainContent(props) {
  const handleOpenSidebarBtn = HandlerOpenSidebarBtn(props)
  const {onCollapsedMain} = props.state
  
  const className = ClassNames('main-container', {
    'collapsed-main-content': onCollapsedMain === true
  })

  return (
    <div className={className}>
      <button
        onClick={handleOpenSidebarBtn}
      >
        Open
      </button>
      <div className='content'>
        Main Content
      </div>
    </div>
  )
}
