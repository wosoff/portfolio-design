import './style/motion-description.sass'
import React from 'react'
import selectLanguage from '../../helpers/selectLanguage'

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
          <div className="m-d-floor-1-stack-1 m-d-helper-text-align">
            {selectLanguage({
              en: 'Creative',
              ko: '창의적'
            })}
          </div>
          <div className="m-d-floor-1-stack-2 m-d-helper-text-align">
            {selectLanguage({
              en: 'Aesthetic',
              ko: '심미적'
            })}
          </div>
          <div className="m-d-floor-2-stack-1 m-d-helper-text-align">
            {selectLanguage({
              en: 'Abstract',
              ko: '추상적'
            })}
          </div>
          <div className="m-d-floor-2-stack-2 m-d-helper-text-align">
            {selectLanguage({
              en: 'Common',
              ko: '공통'
            })}
          </div>
          <div className="m-d-floor-2-stack-3 m-d-helper-text-align">
            {selectLanguage({
              en: 'No Boundaries',
              ko: '경계가 없는'
            })}</div>
          <div className="m-d-layer-design m-d-helper-text-align"></div>
          <div className="layout-m-d-sentence m-d-helper-text-align">
            {selectLanguage({
              en: 'Design is the compound I love',
              ko: '디자인, 나의 관심사가 결합된 것'
            })}
            </div>
        </div>
      }
    </>
  )
}