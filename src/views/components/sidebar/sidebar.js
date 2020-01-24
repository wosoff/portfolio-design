import React from 'react'
import TabBtn from '../tab-btn/tab-btn'
import TabContent from '../tab-content/tab-content'
import './style/sidebar.sass'

export default class Sidebar extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props)

    this.handleCloseBtn = this.handleCloseBtn.bind(this)
  }

  handleCloseBtn() {
    this.props.toggleSidebarClassName()
  }

  render() {
    const {classNameList} = this.props
    const {sidebarShow} = classNameList

    return (
      <div className={`sidebar ${sidebarShow}`}>
        <button
          id='close-sidebar'
          onClick={this.handleCloseBtn}
        >
          Close
        </button>
        <div className="tab">
          <TabBtn />
          <TabContent />
        </div>
      </div>
    )
  }
}