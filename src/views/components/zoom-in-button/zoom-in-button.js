import './style/zoom-in-button.sass'
import React, {useState} from 'react'
import ZoomController from '../zoom-controller/zoom-controller'

/**
 * @param {{ src: string; isZoomBtnON: boolean; setZoomBtnDisplay: Function}} props
 */
export default function ZoomInButton(props) {
  const {src} = props


  const [isZoomIn, setZoomIn] = useState(false)

  
 
  return (
    <div className="zoom-in-button-container"
    >
      <div className={'zoom-in-button'}
           
        onClick={() => { setZoomIn(true)}}
      >
          Click!
    
      </div>
      
      <ZoomController 
        isZoomIn={isZoomIn}
        setZoomIn={setZoomIn}
        src={src}
      />
    </div>
  )
}