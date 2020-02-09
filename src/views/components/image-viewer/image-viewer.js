import './style/image-viewer.sass'
import React, {useState} from 'react'
import ZoomController from '../zoom-controller/zoom-controller'
import selectLanguage from '../../helpers/selectLanguage'

/**
 * @param {{ setShowingZoomBtn: any; setZoomingIn: any;}} props
 */
function ToggleZoomInBtn(props) {
  const {setShowingZoomBtn, setZoomingIn} = props

  return (
    <>
      <button
        className="toggle-viewer-zoom-btn"
        onMouseOut={() => {setShowingZoomBtn(false)}}
        onClick={() => {
          setShowingZoomBtn(false)
          setZoomingIn(true)
        }}
      >
        {
          selectLanguage({
            en: 'Click', ko: '자세히 보기'
          })
        }
      </button>
    </>
  )
}

/**
 * @param {{ src: string; thumbnailStyle?: import('react').CSSProperties; zoomStyle?: import('react').CSSProperties; description?: string;}} props
 */
export default function ImageViewer(props) {
  const {
    src, 
    thumbnailStyle, 
    zoomStyle,
    description
  } = props

  const [isShowingZoomBtn, setShowingZoomBtn] = useState(false)
  const [isZoomingIn, setZoomingIn] = useState(false)

  return (
    <>
    <div className="image-viewer">
      <div 
        className="image-viewer-thumbnail"
        style={{...thumbnailStyle}}
      >
        {
          isShowingZoomBtn && 
          <ToggleZoomInBtn 
            setShowingZoomBtn={setShowingZoomBtn} 
            setZoomingIn={setZoomingIn}
          />
        }
        <img 
          className="image-viewer-src"
          src={src}
          onMouseOver={() => {setShowingZoomBtn(true)}}
        />
      </div>
      <p className="image-viewer-description">{description}</p>
    </div>
    <ZoomController 
      src={src}
      isZoomingIn={isZoomingIn}
      setZoomingIn={setZoomingIn}
      style={zoomStyle}
    />
    </>
  )
}
