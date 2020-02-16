import './style/motion-description.sass'
import React from 'react'

/**
 * @param {{ motionRun: boolean; }} props
 */
export default function MotionDescription(props) {
  const {motionRun} = props
  return (
    <>
      {
        motionRun === true && 

        <div className="motion-description">
          <div className="m-d-floor-1-stack-1 m-d-helper-text-align">Creative</div>
          <div className="m-d-floor-1-stack-2 m-d-helper-text-align">Aesthetic</div>
          <div className="m-d-floor-2-stack-1 m-d-helper-text-align">Abstract</div>
          <div className="m-d-floor-2-stack-2 m-d-helper-text-align">Common</div>
          <div className="m-d-floor-2-stack-3 m-d-helper-text-align">No Boundaries</div>
          <div className="m-d-layer-design m-d-helper-text-align"></div>
          <div className="layout-m-d-sentence m-d-helper-text-align">Design is the compound I love.</div>
        </div>
      }
    </>
  )
}