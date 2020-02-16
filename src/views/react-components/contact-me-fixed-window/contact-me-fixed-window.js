import './style/contact-me-fixed-window.sass'
import React, { useState, useRef} from 'react'
import CommonCloseBtn from '../common-close-button/common-close-btn'
import PopUpMessageBottom from '../pop-up-message-bottom/pop-up-message-bottom'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ isCollapsedMain: boolean; isClickedContact: boolean; setIsClickedContact: Function; }} props
 */
export default function ContactMeFixedWindow(props) {
  const {isCollapsedMain, isClickedContact, setIsClickedContact} = props

  const [msgToCopySuccess, setMsgToCopySuccess] = useState('')

  const mailInputValueRef = useRef(null)
  const phoneInputValueRef = useRef(null)

    // @ts-ignore
  const copyToClipboard = ref => (e) => {
      // @ts-ignore
      ref.current.select()
  
      document.execCommand('copy')
      e.target.focus()
  
      setMsgToCopySuccess(
        selectLanguage({
          en: 'Copied!',
          ko: '복사되었습니다!'
        })
      )
    }

  /**
   * @param {{ contactInputRef: any; }} props
   */
  function ButtonToCopy(props) {
    const {contactInputRef} = props
    return (
      <button
        id="btn-copy-contact"
        onClick={copyToClipboard(contactInputRef)}
      >
        {
          selectLanguage({
            en: 'Copy',
            ko: '복사'
          })
        }
      </button>
    )
  }

  return (
    <>
      {
        isCollapsedMain === false && isClickedContact === true &&
        <div className="contact-me-fixed-window">
          <div className="contact-me-email">
            <input
              id="contact-me-email-value"
              type="text"
              ref={mailInputValueRef}
              value='kekekj@naver.com'
              onChange={() => {}}
            />
            <ButtonToCopy contactInputRef={mailInputValueRef} />
          </div>
          <div className="contact-me-phone">
            <input
              id="contact-me-phone-value"
              type="text"
              ref={phoneInputValueRef}
              value='010 9967 1657'
              onChange={() => {}}
            />
            <ButtonToCopy contactInputRef={phoneInputValueRef} />
          </div>
          <CommonCloseBtn 
            onClick={() => {setIsClickedContact(false)}}
          />
        </div>
      }
      {
        msgToCopySuccess !== '' &&
        <PopUpMessageBottom 
          msg={msgToCopySuccess}
          setMsg={setMsgToCopySuccess}
        />
      }
    </>
  )
}