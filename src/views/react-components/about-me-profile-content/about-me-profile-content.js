import './style/about-me-profile-content.sass'
import React from 'react'
import {IMAGE_PATH} from '../../var/PUBLIC_PATH'
import selectLanguage from '../../helpers/selectLanguage'

export default function AboutMeProfile() {
  return (
    <div className="about-me-profile-content">
      <div className="about-me-profile-content-photo">
        <img src={IMAGE_PATH.ABOUT_ME_PHOTO} />
        <div></div>
      </div>
      <div className="about-me-profile-content-text">
        <ul>
          <li>{selectLanguage({
            en: `I'm 37.`, 
            ko: '84년생 37세 입니다.'
            })}
          </li>
          <li>{selectLanguage({
            en: 'Sejong University. Computer Engineering Major.', 
            ko: '세종대학교 컴퓨터공학 졸업하였습니다.'
            })}
          </li>
          <li>{selectLanguage({
            en: 'I has experience in automatic control system.',
            ko: '자동제어시스템업에서 일했습니다.'
            })}
          </li>
          <li>{selectLanguage({
              en: 'I has experience in metalizing manufacturing.',
              ko: '증착업에서 일했습니다.'
            })}
          </li>
          <li>{selectLanguage({
            en: 'I has experience in web development as free-lancer.',
            ko: '프리랜서 웹 개발자로 일했습니다.'
            })}
          </li>
        </ul>
      </div>
    </div>
  )
}
