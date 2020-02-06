import './style/sidebar-tab.sass'
import React from 'react'
import selectLanguage from '../../helpers/selectLanguage'
/**
 * @param {{ setIndexToSidebarTab: Function;}} props
 */
export default function SidebarTab(props) {
  const {setIndexToSidebarTab} = props

  return (
    <div className="sidebar-tab">
      <div
        id="tab-work"
        onClick={() => {setIndexToSidebarTab(0)}}
      >
        {selectLanguage({
          en: 'Work', ko: '오브젝트'
        })}
      </div>
      <div
        id="tab-tech"
        onClick={() => {setIndexToSidebarTab(1)}}
      >
        {selectLanguage({
          en: 'Tech', ko: '보유 기술'
        })}
      </div>
      <div
        id="tab-history"
        onClick={() => {setIndexToSidebarTab(2)}}
      >
        {selectLanguage({
          en: 'History', ko: '오브젝트 생성 과정'
        })}
      </div>
    </div>
  )
}