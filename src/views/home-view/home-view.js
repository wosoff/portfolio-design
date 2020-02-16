import './style/home-main.sass'
import React from 'react'
import ReactDOM from 'react-dom'
import ContactLogo from '../react-components/contact-logo/contact-logo'
import LanguageDropDownSelection from '../react-components/language-drop-down-selection/language-drop-down-selection'
import Sidebar from '../react-components/sidebar/sidebar'
import MainContent from '../react-components/main-content/main-content'


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
    this.lang = sessionStorage.getItem('LANG')
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
        <header className="layout-header">
          <div className="layout-contact-logo">
            <ContactLogo />
          </div>
          <div className="layout-language-drop-down">
            <LanguageDropDownSelection 
              isCollapsedMainPage={onCollapsedMain}
            />
          </div>
        </header>
        
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