/**
 * @typedef {object} techInfoType
 * @property {string} title
 * @property {boolean} isAdvanced
 * @property {any[]} materializations
 */

/**
 * @typedef {object} techGridType
 * @property {any} viewer
 * @property {string} src
 * @property {string} [description]
 */


import ImageViewer from '../react-components/image-viewer/image-viewer'
import selectLanguage from '../helpers/selectLanguage'


/**
 * @type {techInfoType[]}
 */
export const designTechItems = [
  {
    title: selectLanguage({en: 'Photoshop', ko: '포토샵'}), 
    isAdvanced: true,
    materializations: [
      {
        viewer: ImageViewer, 
        src: "public/assets/images/tech-photoshop-1.jpg",
        description: selectLanguage({en: 'Double Exposure', ko: '이중노출효과'})
      },
      {
        viewer: ImageViewer, 
        src: "public/assets/images/tech-photoshop-2.jpg",
        description: selectLanguage({en: 'Text Portrait', ko: '텍스트 인물화'})
      }
    ]
  },
  {
    title: selectLanguage({en: 'Illustrator', ko: '일러스트레이터'}),
    isAdvanced: false,
    materializations: []
  },
  {
    title: selectLanguage({en: 'After Effects', ko: '애프터이펙트'}), 
    isAdvanced: false,
    materializations: []
  }
]

/**
 * @type {techInfoType[]}
 */
export const frontendTechItems = [
  {
    title: selectLanguage({en: 'HTML', ko: 'HTML'}),
    isAdvanced: true,
    materializations: []
  },
  {
    title: selectLanguage({en: 'CSS', ko: 'CSS'}),
    isAdvanced: true,
    materializations: []
  },
  {
    title: selectLanguage({en: 'Javascript', ko: '자바스크립트'}),
    isAdvanced: true,
    materializations: []
  },
  {
    title: selectLanguage({en: 'JQuery', ko: '제이쿼리'}),
    isAdvanced: true,
    materializations: []
  },
  {
    title: selectLanguage({en: 'React', ko: '리액트'}),
    isAdvanced: true,
    materializations: []
  }
]

/**
 * @type {techInfoType[]}
 */
export const backendTechItems = [
    {
    title: selectLanguage({en: 'Node Js', ko: '노드 제이에스'}),
    isAdvanced: true,
    materializations: []
  },
  {
    title: selectLanguage({en: 'Amazon Web Service', ko: '아마존 웹 서비스'}),
    isAdvanced: false, 
    materializations: []
  }
]