import './style/home-main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import ContactLogo from '../components/contact-logo/contact-logo'
import Sidebar from '../components/sidebar/sidebar'
import MainContent from '../components/main-content/main-content'


class HomeComponent extends React.Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props)
    this.state = {
      onSidebar: false,
      onCollapsedMain: false
    }
    this.contactLogoTimerID = 0
    this.toggleSidebarClassName = this.toggleSidebarClassName.bind(this)
  }

  toggleSidebarClassName() {
    this.setState({
      onSidebar: !this.state.onSidebar,
      onCollapsedMain: !this.state.onCollapsedMain
    })
  }

  render() {
    const {onCollapsedMain, onSidebar} = this.state

    return (
      <>
        <div className="layout-contact-logo">
          <ContactLogo />
        </div>
        <div className="layout-sidebar">
          <Sidebar 
            onSidebar={onSidebar}
            onToggleSidebarClassName={this.toggleSidebarClassName}
          />
        </div>
        <div className="layout-main-content">
          <MainContent 
            onCollapsedMain={onCollapsedMain}
            onToggleSidebarClassName={this.toggleSidebarClassName}
          />
        </div>
      </>
    )
  }
}

ReactDOM.render(
  <HomeComponent />,
  document.getElementById('react-root')
);