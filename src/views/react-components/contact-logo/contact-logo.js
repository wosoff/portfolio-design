import React, {Component} from 'react'
import ClassNames from 'classnames'
// import ContactWindow from '../contact-window/contact-window'
import './style/contact-logo.sass'

export default class ContactLogo extends Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props)
    this.timerID = 0
    this.duration = 50
    this.state = {
      isOnLogoContact: false,
    }
    this.clickLogo = this.clickLogo.bind(this)
  }

  clickLogo() {
    window.location.href = '/'
  }

  componentDidMount() {
    this.timerID = setTimeout(() => {
      this.setState({
        isOnLogoContact: true
      })
    }, this.duration)
  }

  componentWillUnmount() {
    clearTimeout(this.timerID)
  }

  render() {
    const {isOnLogoContact} = this.state
    const className = ClassNames('contact-logo', {
      'show-contact-logo': isOnLogoContact
    })

    return (
    <div className={className}>
      <img 
        onClick={this.clickLogo}
        src="public/assets/images/contact-logo.gif"
        alt="Contact Logo"
      />
    </div>
    )
  }
}

// export default class ContactLogo extends React.Component {
//   /**
//    * @param {any} props
//    */
//   constructor(props) {
//     super(props)
//     this.timerID = 0
//     this.duration = 50
//     this.state = {
//       isOnLogoContact: false,
//       isOnContactCopyWindow: false,
//       didClickCloseBtnToCopyWindow: false
//     }
//     this.handleLogoClick = this.handleLogoClick.bind(this)
//     this.handleCloseCopyWindow = this.handleCloseCopyWindow.bind(this)
//   }

//   handleLogoClick() {
//     this.setState({
//       isOnContactCopyWindow: true,
//       didClickCloseBtnToCopyWindow: false
//     })
//   }

//   handleCloseCopyWindow() {
//     this.setState({didClickCloseBtnToCopyWindow: true})
//   }

//   componentDidMount() {
//     this.timerID = setTimeout(() => {
//       this.setState({
//         isOnLogoContact: true
//       })
//     }, this.duration)
//   }

//   componentWillUnmount() {
//     clearTimeout(this.timerID)
//   }

//   render() {
//     const {
//       isOnLogoContact, isOnContactCopyWindow, didClickCloseBtnToCopyWindow
//     } = this.state

//     const className = ClassNames('contact-logo', {
//       'show-contact-logo': isOnLogoContact
//     })
  
//     return (
//       <div 
//         className={className}
//       >
//         <img 
//           onClick={this.handleLogoClick}
//           src="public/assets/images/contact-logo.gif"
//           alt="Contact Logo"
//         />
//         <ContactWindow 
//           isOnContactCopyWindow={isOnContactCopyWindow}
//           didClickCloseBtnToCopyWindow={didClickCloseBtnToCopyWindow}
//           handleCloseCopyWindow={this.handleCloseCopyWindow}
//         />
//       </div>
//     )
//   }
// }

