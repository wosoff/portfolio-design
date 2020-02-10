import './style/content-tech-item-controller.sass'
import React, {useState} from 'react'
import TechRangeGradientBar from '../tech-range-gradient-bar/tech-range-gradient-bar'
import ImageGridViewer from '../image-grid-viewer/image-grid-viewer'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ techItemInfo: {title: string; level: any;}; gridViewerItems: {src: any; viewer: any}[];}} props
 */
export default function ContentTechItemController(props) {
  const {techItemInfo, gridViewerItems} = props
  const {title, level} = techItemInfo
  const [isShowingGrid, setShowingGrid] = useState(false)

  function ShowingGridButton() {
    if (gridViewerItems.length === 0) {
      return <></>
    }
    return (
      <>
        <button 
          className="show-content-tech-items"
          onClick={() => {setShowingGrid(true)}}
        >
          {
            selectLanguage({en: 'See Project!', ko: '기술 구현 보기'})
          }
        </button>
      </>
    )
  }

  return (
  <>
    <div className="content-tech-item-controller">
      <h3 className="item-controller-title">{title}</h3>
      <div className="item-controller-level">
        <TechRangeGradientBar level={level}/>
      </div>
      <ShowingGridButton />
    </div>
    <div className="content-tech-item-grid">
      {
        isShowingGrid === true && 
        <ImageGridViewer 
          closeGridViewer={setShowingGrid}
          gridViewerItems={gridViewerItems}
        />
      }
    </div>
  </>
  )
}