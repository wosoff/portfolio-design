import React, {Component} from 'react'
import ClassNames from 'classnames'
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
      isOnLogoContact: false
    }

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
        <a
          href="/"
        >
          <img 
            src="public/assets/images/contact-logo.gif"
            alt="Contact Logo"
          />
        </a>
      </div>
    )
  }
}

// export default function ContactLogo(props) {
//   const {state} = props

//   const className = ClassNames('contact-logo', {
//     'show-contact-logo': state.onLogoContact
//   })
  
//   return (
//     <div className={className}>
//       <a
//         href="/"
//       >
//         <img 
//           src="public/assets/images/contact-logo.gif"
//           alt="Contact Logo"
//         />
//       </a>
//     </div>
//   )
// }