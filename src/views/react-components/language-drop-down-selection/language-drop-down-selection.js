import './style/language-drop-down-selection.sass'
import React from 'react'
import convertIDtoSessionKey from '../../helpers/convertIDtoSessionKey'

/**
 * @param {{ isCollapsedMainPage: boolean; }} props
 */
export default function LanguageSelectionDropDown(props) {
  const {isCollapsedMainPage} = props

    /**
   * @param {any} e
   */
  function clickLangSelection(e) {
    const {id} = e.target
    const selectedLang = convertIDtoSessionKey(id)
    // @ts-ignore
    sessionStorage.setItem('LANG', selectedLang)
    window.location.href = '/home'
  }

  return (
    <>
      {
        isCollapsedMainPage === false &&
        <div className="language-drop-down-selection">
          <button id="dropdown-title">Language 테스트</button>
          <button 
            id="dropdown-en"
            onClick={clickLangSelection}
          > English 
          </button>
          <button 
            id="dropdown-ko"
            onClick={clickLangSelection}
          >한국어
          </button>
        </div>
      }
    </>
    
  )
}