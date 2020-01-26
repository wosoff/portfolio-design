import React from 'react'
import ClassNames from 'classnames'
import SidebarTab from '../sidebar-tab/sidebar-tab'
import './style/sidebar.sass'


const CloseBtnHandler = props => () => {
  props.onToggleSidebarClassName()
}

export default function Sidebar(props) {
  const {onSidebar} = props.state
  const handleCloseBtn = CloseBtnHandler(props)

  const className = ClassNames('sidebar', {
    'show-sidebar': onSidebar === true
  })

  return (
    <div 
      className={className}
    >
      <button
        id='close-sidebar'
        onClick={handleCloseBtn}
      >
        Close
      </button>
      <SidebarTab />
    </div>
  )
}








// export default class Sidebar extends React.Component {
//   /**
//    * @param {any} props
//    */
//   constructor(props) {
//     super(props)
    
//     this.state = {
//       indexToTabContent: 0
//     }
//     this.handleCloseBtn = this.handleCloseBtn.bind(this)
//   }

//   handleCloseBtn() {
//     this.props.toggleSidebarClassName()
//   }

//   render() {
//     const {classNameList} = this.props
//     const {sidebarShow} = classNameList

//     return (
//       <div className={`sidebar ${sidebarShow}`}>
//         <button
//           id='close-sidebar'
//           onClick={this.handleCloseBtn}
//         >
//           Close
//         </button>
//           <SidebarTab />
//       </div>
//     )
//   }
// }