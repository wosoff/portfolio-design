/**
 * @typedef {object} techInfoType
 * @property {string} title
 * @property {string} level
 */

/**
 * @typedef {object} techGridType
 * @property {any} viewer
 * @property {string} src
 */


import ImageViewer from '../components/image-viewer/image-viewer'
import selectLanguage from '../helpers/selectLanguage'

const HIGH_SKILL = 'high'
const MID_SKILL = 'middle'

/**
 * @type {techInfoType[]}
 */
const designInfo = [
  {
    title: selectLanguage({en: 'Photoshop', ko: '포토샵'}), 
    level: HIGH_SKILL
  },
  {
    title: selectLanguage({en: 'Illustrator', ko: '일러스트레이터'}), 
    level: MID_SKILL
  },
  {
    title: selectLanguage({en: 'After Effects', ko: '애프터이펙트'}), 
    level: MID_SKILL
  }
]

/**
 * @type {techGridType[]}
 */
const designGrid = [
  {viewer: ImageViewer, src: "public/assets/images/test/large-1-2.jpg"},
  {viewer: ImageViewer, src: "public/assets/images/test/large-1-3.jpg"},
  {viewer: ImageViewer, src: "public/assets/images/test/large-1-4.jpg"},
  {viewer: ImageViewer, src: "public/assets/images/test/large-1-5.jpg"}
]

/**
 * @type {techInfoType[]}
 */
const frontendInfo = [
  {
    title: selectLanguage({en: 'HTML', ko: 'HTML'}),
    level: HIGH_SKILL
  },
  {
    title: selectLanguage({en: 'CSS', ko: 'CSS'}),
    level: HIGH_SKILL
  },
  {
    title: selectLanguage({en: 'Javascript', ko: '자바스크립트'}),
    level: HIGH_SKILL
  },
  {
    title: selectLanguage({en: 'JQuery', ko: '제이쿼리'}),
    level: MID_SKILL
  },
  {
    title: selectLanguage({en: 'React', ko: '리액트'}),
    level: HIGH_SKILL
  }
]

/** @type {never[]} */
const frontendGrid = []

/**
 * @type {techInfoType[]}
 */
const backendInfos = [
  {
    title: selectLanguage({en: 'Node Js', ko: '노드 제이에스'}),
    level: HIGH_SKILL
  },
  {
    title: selectLanguage({en: 'Amazon Web Service', ko: '아마존 웹 서비스'}),
    level: MID_SKILL
  }
]

/** @type {never[]} */
const backendGrid = []

export const designItems = {
  infos: designInfo,
  grid: designGrid
}

export const frontendItems = {
  infos: frontendInfo,
  grid: frontendGrid
}

export const backendItems = {
  infos: backendInfos,
  gird: backendGrid
}