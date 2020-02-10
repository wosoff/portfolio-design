/**
 * @typedef {object} historyGridType
 * @property {any} viewer
 * @property {string} src
 */

import ImageViewer from '../react-components/image-viewer/image-viewer'

/**
 * @type {historyGridType[]}
 */
const historyGrid1 = [
  {viewer: ImageViewer, src: "public/assets/images/history-portfolio-1.jpg"},
]

/**
 * @type {historyGridType[]}
 */
const historyGrid2 = [
  {viewer: ImageViewer, src: "public/assets/images/history-portfolio-2.jpg"}
]

export const HISTORY_GRID_ITEMS = {
  HISTORY_1: historyGrid1,
  HISTORY_2: historyGrid2
}