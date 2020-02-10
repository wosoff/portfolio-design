import './style/language-selection.sass'
import React from 'react'
import convertIDtoSessionKey from '../../helpers/convertIDtoSessionKey'

export default function LanguageSelection() {
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
    
    <div className="lang-selection">
      <button 
        id="lang-en"
        onClick={clickLangSelection}
      >
        English
      </button>
      <button
        id="lang-ko"
        onClick={clickLangSelection}
      >
        한국어
      </button>
    </div>

  )
}