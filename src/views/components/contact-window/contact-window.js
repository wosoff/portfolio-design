import './style/contact-window.sass'
import React, {useState} from 'react'
import ClassNames from 'classnames'
import ContactWindowContent from '../contact-window-content/contact-window-content'

/**
 * @param {any} props
 */
export default function ContactWindow(props) {
  const {
    didClickCloseBtnToCopyWindow, isOnContactCopyWindow, handleCloseCopyWindow
  } = props

  const [copySuccess, setCopySuccess] = useState('')

  function closeCopyWindow() {
    handleCloseCopyWindow()
    // As it close window of copy to contact, 
    // initialize message when is created to copy successfully
    setCopySuccess('')
  }

  const className = ClassNames('contact-window', {
    'show-contact-window': isOnContactCopyWindow && !didClickCloseBtnToCopyWindow
  })

  return (
    <div className={className}>
      <button
        id="window-close-button"
        onClick={closeCopyWindow}
      >
        Close
      </button>
      <div className="contact-content-container">
        <ContactWindowContent 
          copySuccess={copySuccess}
          setCopySuccess={setCopySuccess}
        />
      </div>
    </div>
  )
}