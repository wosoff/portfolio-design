import './style/about-me-experience-content.sass'
import React from 'react'
import selectLanguage from '../../helpers/selectLanguage'
import {IMAGE_PATH} from '../../var/PUBLIC_PATH'
import CommonTechRangeBar from '../common-tech-range-bar/common-tech-range-bar'
import WebAnimationLogo from '../web-animation-logo/web-animation-logo'

function ExperienceDesignImages() {
  const infos = [
    { 
      title: selectLanguage({en: 'Photoshop', ko: '포토샵'}), 
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_PHOTOSHOP, 
      isAdvanced: true
    },
    { 
      title: selectLanguage({en: 'Illustrator', ko: '일러스트레이터'}),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_ILLUSTRATOR, 
      isAdvanced: false
    },
    {
      title: selectLanguage({en: 'After Effects', ko: '애프터이펙트'}),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_AFTER_EFFECTS, 
      isAdvanced: false
    }
  ]

  const imgs = infos.map(({title, path, isAdvanced}) => {
    return (
      <div className="experience-content-design-images">
        <img 
          src={path}
          width="100"
          height="100"
        />
        <div className="exp-cdi-title">{title}</div>
        <CommonTechRangeBar isAdvanced={isAdvanced}/>
      </div>
    )
  }) 
  return (<>{imgs}</>)
}


function ExperienceWebProgrammingImages() {
  const infos = [
    {
      title: selectLanguage({
        en: 'HTML',
        ko: 'HTML'
      }),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_FRONTEND_HTML,
      isAdvanced: true
    },
    {
      title: selectLanguage({
        en: 'CSS',
        ko: 'CSS'
      }),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_FRONTEND_CSS,
      isAdvanced: true
    },
    {
      title: selectLanguage({
        en: 'Javascript',
        ko: '자바스크립트'
      }),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_FRONTEND_JS,
      isAdvanced: true
    },
    {
      title: selectLanguage({
        en: 'JQuery',
        ko: '제이쿼리'
      }),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_FRONTEND_JQUERY,
      isAdvanced: true,
    },
    {
      title: selectLanguage({
        en: 'React',
        ko: '리액트'
      }),
      path: IMAGE_PATH.ABOUT_ME_EXPERIENCE_FRONTEND_REACT,
      isAdvanced: true
    }
  ]

  const imgs = infos.map(({title, path, isAdvanced}) => {
    return (
      <div className="experience-content-web-programming-images">
        <img 
          src={path}
          width="100"
          height="100"
        />
        <div className="exp-cdi-title">{title}</div>
        <CommonTechRangeBar isAdvanced={isAdvanced}/>
      </div>
    )
  }) 

  return (
    <>
      {imgs}
      <div className="experience-content-web-programming-images">
        <WebAnimationLogo /> 
        <div className="exp-cdi-title">
          {selectLanguage({
            en: 'Web Motion',
            ko: '웹 모션'
          })}
        </div>
        <div className="exp-cdi-web-animation"><CommonTechRangeBar isAdvanced={true}/></div>
      </div>
    </>
  )
}

export default function AboutMeExperienceContent() {
  return (
    <div className="about-me-experience-content">
      <div className="experience-content-design">
        <div className="experience-content-design-title">
          {selectLanguage({
            en: 'Design', ko: '디자인'
          })}
        </div>
        <ExperienceDesignImages />
      </div>
      <div className="experience-content-web-programming">
        <div className="experience-content-web-programming-title">
          {selectLanguage({
            en: 'Web Programming', ko: '웹 프로그래밍'
          })}
        </div>
        <ExperienceWebProgrammingImages />
      </div> 
    </div>
  )
}
