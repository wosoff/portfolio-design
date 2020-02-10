import './style/sidebar-content-history.sass'
import React, {useState} from 'react'
import {IMAGE_PATH} from '../../var/PUBLIC_PATH'
import {HISTORY_GRID_ITEMS} from '../../var/HISTORY_ITEM_LIST'
import ImageGridViewer from '../image-grid-viewer/image-grid-viewer'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ description: string; thumbnailSrc: any; gridViewerItems: any; }} props
 */
function HistoryThumbnail(props) {
  const {description, thumbnailSrc, gridViewerItems} = props

  const [isON, setIsOn] = useState(false)

  return (
    <>
      <div className="content-history-thumbnail">
        <p>{description}</p>
        <div className="content-history-thumbnail-frame">
          <img src={thumbnailSrc}/>
          <button 
            id="btn-history-thumbnail"
            onClick={() => {setIsOn(true)}}
          >
            {
              selectLanguage({
                en: 'See Detail Of History',
                ko: '자세히 보기'
              })
            }
          </button>
        </div>
      </div>
      {
        isON === true && 
        <ImageGridViewer 
          gridViewerItems={gridViewerItems}
          closeGridViewer={() => {setIsOn(false)}}
        />
      }
  </>
  )
}

export default function SidebarContentHistory() {
  return (
    <div className="sidebar-content-history">
      <HistoryThumbnail 
        description={selectLanguage({
          en: 'The History Of Portfolio',
          ko: '첫번째 포트폴리오 작업과정'
        })}
        thumbnailSrc={IMAGE_PATH.WORK_PORTFOLIO_1}
        gridViewerItems={HISTORY_GRID_ITEMS.HISTORY_1}
      />
      <HistoryThumbnail
        description={selectLanguage({
          en: 'The History Of Portfolio',
          ko: '두번째 포트폴리오 작업과정'
        })}
        thumbnailSrc={IMAGE_PATH.wORK_PORTfOLIO_2}
        gridViewerItems={HISTORY_GRID_ITEMS.HISTORY_2}
      />
    </div>
  )
}