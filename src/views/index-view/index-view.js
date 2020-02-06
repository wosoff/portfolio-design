import './style/index-main.sass'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import convertIDtoSessionKey from '../helpers/convertIDtoSessionKey'

class IndexComponent extends Component {
  /**
   * @param {any} props
   */
  constructor(props) {
    super(props)
    this.clickLangSelection = this.clickLangSelection.bind(this)
  }

  /**
   * @param {any} e
   */
  clickLangSelection(e) {
    const {id} = e.target
    const selectedLang = convertIDtoSessionKey(id)
    // @ts-ignore
    sessionStorage.setItem('LANG', selectedLang)
  }

  render() {
    return (
      <div className="lang-selection">
        <button
        >
          <a
            id="lang-en"
            href="/home"
            onClick={this.clickLangSelection}
          > 
            English
          </a>
        </button>
        <button
        >
          <a 
            id="lang-ko"
            href="/home"
            onClick={this.clickLangSelection}
          > 
            한국어
          </a>
        </button>
      </div>
    )
  }
}

ReactDOM.render(
  <IndexComponent />,
  document.getElementById('index-root')
);