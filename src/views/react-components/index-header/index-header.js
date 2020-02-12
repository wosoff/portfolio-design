import './style/index-header.sass'
import React from 'react'

export default function IndexHeader() {
  /**
   * @param {{length: number}} props
   */
  const MotionBars = ({length}) => {
    const bars = []

    for (let i = 0; i < length; i = i + 1) {
      bars.push(<div className="m-bar"></div>)
    }

    return (
      <>
        {bars}
      </>
    )
  }

  return (
    <div className="motion-main-title">
      <div className="motion-title-bars-layout">
        <div className="motion-title-bars">
          <MotionBars length={20}/>
        </div>
      </div>
      <div className="motion-title-text">
         THE ARTWORKS OF KIM-BK'S
     </div>
   </div>
  )
}