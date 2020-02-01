import React from 'react'
import ReactDOM from 'react-dom'
import ContactLogo from '../components/contact-logo/contact-logo'
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
    return (
      <>
        <div className="contact-logo-container">
          <ContactLogo />
        </div>
        <div className="sidebar-container">
          <Sidebar 
            state={this.state}
            onToggleSidebarClassName={this.toggleSidebarClassName}
          />
        </div>
        <div className="main-content-container">
          <MainContent 
            state={this.state}
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