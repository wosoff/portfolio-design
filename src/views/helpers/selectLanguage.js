/**
 * @param {{ch?: string, ko: string, en: string}} param
 * @returns {string} 
 */
export default function selectLanguage({ch, ko, en}) {
  if (typeof ko !== 'string') {
    throw new Error(`Expected 'ko' to be a string`)
  }
  const LANGUAGE = {
    CH: 'CH',
    EN: 'EN',
    KO: 'KO',
  }
  
  const USER_LANG = sessionStorage.getItem('LANG')

  if (USER_LANG === LANGUAGE.CH) {
    if (typeof ch === 'undefined') {
      console.warn('ch is undefined!')
      return ko
    }
    return ch 
  }

  if (USER_LANG === LANGUAGE.EN) {
    if (typeof en === 'undefined') {
      console.warn('en is undefined!')
      return ko
    }
    return en
  }

  if (USER_LANG === LANGUAGE.KO) {
    return ko
  }

  return en
}
