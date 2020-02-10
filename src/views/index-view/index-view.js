import './style/index-main.sass'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import LanguageSelection from '../react-components/language-selection/language-selection'

class IndexComponent extends Component {
  render() {
    return (
      <>
        <LanguageSelection />
      </>
    )
  }
}

ReactDOM.render(
  <IndexComponent />,
  document.getElementById('index-root')
);