import './style/contact-window-content.sass'
import React, {useRef} from 'react'
import PopUpMessageBottom from '../pop-up-message-bottom/pop-up-message-bottom'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ copySuccess: any; setCopySuccess: any; }} props
 */
export default function ContactWindowContent(props) {
  // If one of which are copySuccess, setCopySuccess is undefined,
  // redefine it as load useState from react hook
  // See https://reactjs.org/docs/hooks-intro.html
  const {copySuccess, setCopySuccess} = props
  const textAreaRef = useRef(null)
  
  // @ts-ignore
  function copyToClipboard(e) {
    if (textAreaRef === null) {
      console.error('textAreaRef is null.')
      return
    }
    // @ts-ignore
    textAreaRef.current.select()
    
    document.execCommand('copy')
    e.target.focus()

    setCopySuccess(
      selectLanguage({
        en: 'Copied!',
        ko: '복사되었습니다!'
      })
    )
  }

  return (
    <div className="contact-window-content">
      <input
        type="text"
        ref={textAreaRef}
        value='kekekj@naver.com'
        onChange={() => {}}
      />
    <button
      id="btn-copy-contact-window-content"
      onClick={copyToClipboard}
    >
      {selectLanguage({
        en: 'Copy',
        ko: '복사하기'})
      }
    </button>
    <PopUpMessageBottom 
      msg={copySuccess}
      setMsg={setCopySuccess}
    /> 
  </div>
  )
}