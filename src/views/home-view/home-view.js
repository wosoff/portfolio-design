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
      onLogoContact: false,
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

  componentDidMount() {
    this.contactLogoTimerID = setTimeout(() => {
      this.setState({
        ...this.state,
        onLogoContact: !this.state.onLogoContact
      })
    }, 100)
  }

  
  componentWillUnmount() {
    clearTimeout(this.contactLogoTimerID)
   };

  render() {
    return (
      <>
        <ContactLogo state={this.state}/>
        <MainContent 
          state={this.state}
          onToggleSidebarClassName={this.toggleSidebarClassName}
        />
        <Sidebar 
          state={this.state}
          onToggleSidebarClassName={this.toggleSidebarClassName}
        />
      </>
    )
  }
}

ReactDOM.render(
  <HomeComponent />,
  document.getElementById('react-root')
);