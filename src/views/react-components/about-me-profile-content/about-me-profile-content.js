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
          <li>1984년 37살</li>
          <li>세종대학교 컴퓨터공학 졸업</li>
          <li>자동제어시스템에서 일한 경험 있습니다.</li>
          <li>증착, 코팅업에서 일한 경험 있습니다.</li>
          <li>웹 프로그래머 프리랜서로 일했습니다.</li>
        </ul>
      </div>
    </div>
  )
}
