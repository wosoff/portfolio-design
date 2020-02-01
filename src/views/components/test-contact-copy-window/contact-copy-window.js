import './style/contact-copy-window.sass'
import React from 'react'
import ClassNames from 'classnames'

/**
 * @param {any} props
 */
export default function ContactCopyWindow(props) {
  const {
    didClickCloseBtnToCopyWindow, isOnContactCopyWindow, handleCloseCopyWindow
  } = props

  const className = ClassNames('contact-copy-window', {
    'show-contact-copy-window': isOnContactCopyWindow && !didClickCloseBtnToCopyWindow
  })

  return (
    <div className={className}>
      <button
        onClick={() => { handleCloseCopyWindow() }}
      >
        Close
      </button>
      
      kekekj@naver.com
      
    </div>
  )
}