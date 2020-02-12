import './style/sidebar-tab.sass'
import React, {useState} from 'react'
import ClassNames from 'classnames'
import selectLanguage from '../../helpers/selectLanguage'
/**
 * @param {{ setIndexToSidebarTab: Function;}} props
 */
export default function SidebarTab(props) {
  const {setIndexToSidebarTab} = props

  const [indexToTab, setIndexToTab] = useState(0)

  /**
   * @param {number} index
   */
  const classNames = index => ClassNames('sidebar-tab-title', {
    'change-sidebar-tab-color': index === indexToTab
  })

  return (
    <div className="sidebar-tab">
      <div
        className={classNames(0)}
        onClick={() => {
          setIndexToTab(0)
          setIndexToSidebarTab(0)
        }}
      >
        {selectLanguage({
          en: 'Tech', ko: '보유 기술'
        })}
      </div>

      <div
        className={classNames(1)}
        onClick={() => {
          setIndexToTab(1)
          setIndexToSidebarTab(1)
        }}
      >
        {selectLanguage({
          en: 'Work', ko: '오브젝트'
        })}
      </div>
  
      <div
        className={classNames(2)}
        onClick={() => {
          setIndexToTab(2)
          setIndexToSidebarTab(2)
        }}
      >
        {selectLanguage({
          en: 'History', ko: '히스토리'
        })}
      </div>
    </div>
  )
}