import './style/pop-up-message-bottom.sass'
import React from 'react'
import Classnames from 'classnames'
import CommonCloseBtn from '../common-close-button/common-close-btn'

/**
 * @param {{ msg: string, setMsg: Function}} props
 */
export default function PopUpMessageBottom(props) {
  // Below variables are taken from parent component.
  // These ones are properties of useState of react hook.
  // See https://reactjs.org/docs/hooks-intro.html
  const {msg, setMsg} = props

  function closePopUpMsg() { 
    setMsg('')
  }

  const className = Classnames('pop-up-message-bottom', {
    'show-pop-up': msg !== '' 
  })

  return (
    <div className={className}>
      <span>{msg}</span>
      <div className="close-pop-up-bottom">
        <CommonCloseBtn 
          onClick={closePopUpMsg}
          position={{top: '12px', right: '10px'}}
        />
      </div>
    </div>
  )
}