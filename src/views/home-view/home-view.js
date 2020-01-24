import React from 'react'
import ReactDOM from 'react-dom'
import Sidebar from '../components/sidebar/sidebar'
import MainContent from '../components/main-content/main-content'
import './style/home-main.sass'

class HomeComponent extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props)
    this.state = {
      classNameList: {
        sidebarShow: '',
        mainContentCollapsed: ''
      }
    }
    this.toggleSidebarClassName = this.toggleSidebarClassName.bind(this)
  }

  toggleSidebarClassName() {
    const {classNameList} = this.state
    const {sidebarShow, mainContentCollapsed} = classNameList

    this.setState({
      classNameList: {
        sidebarShow: sidebarShow === ''
          ? 'sidebar-show' : '',
        mainContentCollapsed: mainContentCollapsed === ''
          ? 'main-container-collapsed' : ''
      }
    })
  }

  render() {
    return (
      <>
        <MainContent 
          classNameList={this.state.classNameList}
          toggleSidebarClassName={this.toggleSidebarClassName}
        />
        <Sidebar 
          classNameList={this.state.classNameList}
          toggleSidebarClassName={this.toggleSidebarClassName}
        />
      </>
    )
  }
}

ReactDOM.render(
  <HomeComponent />,
  document.getElementById('react-root')
);