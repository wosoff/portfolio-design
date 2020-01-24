import React from 'react'
// import ClassNames from 'classnames'
import './style/main-content.sass'

export default class MainContent extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props)

    this.toggleSidebarClassName = this.toggleSidebarClassName.bind(this)
    this.state = this.props.state
  }

  toggleSidebarClassName() {
    const {toggleSidebarClassName} = this.props

    toggleSidebarClassName()
  }

  render() {
    const {classNameList} = this.props
    const {mainContentCollapsed} = classNameList

    return (
      <div className={`main-container ${mainContentCollapsed}`}>
        <button
          onClick={this.toggleSidebarClassName}
        >
          Open
        </button>
        <div className='content'>
          Main Content
        </div>
      </div>
    )
  }
}