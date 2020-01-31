import React from 'react'
import ClassNames from 'classnames'
import './style/contact-logo.sass'

export default function ContactLogo(props) {
  const {state} = props

  const className = ClassNames('contact-logo', {
    'show-contact-logo': state.onLogoContact
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