import './style/index-react-main.sass'
import React, {Component} from 'react'
import ReactDOM from 'react-dom'
import IndexHeader from '../react-components/index-header/index-header'
import LanguageSelection from '../react-components/language-selection/language-selection'

class IndexMain extends Component {
  render() {
    return (
      <>
        <LanguageSelection />
      </>
    )
  }
}

ReactDOM.render(
  <IndexHeader />,
  document.getElementById('react-index-header')
)

ReactDOM.render(
  <IndexMain />,
  document.getElementById('react-index-main')
);

