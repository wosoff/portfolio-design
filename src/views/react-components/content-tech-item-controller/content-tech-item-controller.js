import './style/content-tech-item-controller.sass'
import React, {useState} from 'react'
import CommonTechRangeBar from '../common-tech-range-bar/common-tech-range-bar'
import ImageGrigViewer from '../image-grid-viewer/image-grid-viewer'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ materializations: {viewer: any; src: string; description: string; }[]; setShowingGrid: Function; }} props
 */
function ShowingGridButton(props) {
  const {materializations, setShowingGrid} = props
  if (materializations.length === 0) {
    return <></>
  }
  return (
    <>
      <button 
        className="show-content-tech-items"
        onClick={() => {setShowingGrid(true)}}
      >
        {
          selectLanguage({en: 'See Materialization', ko: '기술 구현 보기'})
        }
      </button>
    </>
  )
}

/**
 * @param {{techItems: {title: string; isAdvanced: boolean; materializations: any[]}[]}} props
 */
export default function ContentTechItemController(props) {
  // @ts-ignore
  const {techItems} = props
  
  const controllingTechItems = techItems.map((item) => {
    const {title, isAdvanced, materializations} = item
    const [isShowingGrid, setShowingGrid] = useState(false)
    
    return (
      <>
        <div className="content-tech-item-controller">
          <h3 className="item-controller-title">{title}</h3>
          <div className="item-controller-level">
          <CommonTechRangeBar isAdvanced={isAdvanced}/>
        </div>
        <ShowingGridButton 
          materializations={materializations}
          setShowingGrid={setShowingGrid}
        />
        </div>
        <div className="content-tech-item-grid">
          {
            isShowingGrid === true && 
            <ImageGrigViewer 
              closeGridViewer={setShowingGrid}
              gridViewerItems={materializations}
           />
          }
       </div>
      </>
    )
  })

  return (<>{controllingTechItems}</>)
}