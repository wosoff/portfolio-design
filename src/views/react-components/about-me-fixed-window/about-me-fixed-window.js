import './style/about-me-fixed-window.sass'
import React, {useState, useEffect, useRef} from 'react'
import selectLanguage from '../../helpers/selectLanguage'
import AboutMeCloseButton from '../about-me-close-button/about-me-close-button'
import AboutMeProfileContent from '../about-me-profile-content/about-me-profile-content'
import AboutMeExperienceContent from '../about-me-experience-content/about-me-experience-content'
import MotionDescription from '../motion-description/motion-description'

/**
 * @param {{ isCollapsedMain: boolean; isClickedAboutMe: boolean; setIsClickedAboutMe: Function; }} props
 */
export default function AboutMeFixedWindow(props) {
  const {isCollapsedMain, isClickedAboutMe, setIsClickedAboutMe} = props

  const profileRef_index_0 = useRef(null)
  const descriptionRef_index_2 = useRef(null)
  const experienceRef_index_1 = useRef(null)
  const buttonRef = useRef(null)

  const [indexToPage, setIndexToPage] = useState(0)
  const [motionRun, setMotionRun] = useState(false)


  /** @type {import('react').RefObject<HTMLDivElement>[]} */
  let pagesOfAboutMe = []
  useEffect(() => {
    pagesOfAboutMe = [
      profileRef_index_0,
      experienceRef_index_1,
      descriptionRef_index_2,
    ]
  })

  function clickPageButton() {

    const lengthOfPages = pagesOfAboutMe.length

    // Starting of init
    pagesOfAboutMe.forEach((page) => {
      // @ts-ignore
      const {style} = page.current
      style.opacity = 1
    })

    const currentPage = pagesOfAboutMe[indexToPage]
    // @ts-ignore
    const {style} = currentPage.current

    const indexToLastPage = lengthOfPages - 1
    if (indexToPage === indexToLastPage) {

      style.opacity = 0

      for (let i = 0; i < indexToLastPage; i = i + 1) {
        const {current} = pagesOfAboutMe[i]
        // @ts-ignore
        current.style.zIndex = ''
        // @ts-ignore
        current.style.transform = ''
      }

      setMotionRun(false)
      setIndexToPage(0)
      return
    }
    
    if (indexToPage === 1) {
      setMotionRun(true)
    }
    style.transform = 'rotateY(180deg)'
    style.opacity = 0.3
    style.zIndex = indexToPage
    
    const nextIndexToPage = (indexToPage + 1) % lengthOfPages
    setIndexToPage(nextIndexToPage)

  }

  return (
    <>
      {
        isCollapsedMain === false && isClickedAboutMe === true && 
        <div className="about-me-fixed-window">
     
          <div 
            id="about-me-fixed-description"
            ref={descriptionRef_index_2}
          >
            <div className="layout-about-me-content">
              <div className="about-me-description-sentence">
                {selectLanguage({
                  en: 'Design is my own myth',
                  ko: '디자인은 나만의 신화입니다'
                })}
              </div>
              <div className="about-me-description-motion">
                <MotionDescription motionRun={motionRun}/>
              </div>
            </div>
          </div>

          <div 
            id="about-me-fixed-experience"
            ref={experienceRef_index_1}
          >
            <div className="layout-about-me-content">
              <AboutMeExperienceContent />
            </div>
          </div>

          <div 
            id="about-me-fixed-profile"
            ref={profileRef_index_0}
          >
            <div className="layout-about-me-content">
              <AboutMeProfileContent />
            </div>
          </div>
          <div className="layer-page-center-space">
          </div>
          <button 
            id="about-me-next-button"
            ref={buttonRef}
            onClick={clickPageButton}
          >
            {selectLanguage({en: 'NEXT', ko: '넘기기'})}
          </button>
          <AboutMeCloseButton 
            setIsClickedAboutMe={setIsClickedAboutMe}
          />
        </div>
      }
    </>
  )
}