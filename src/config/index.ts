import _ from 'lodash';

import contentEN from './content.en.json';
import contentFR from './content.fr.json';

const content = () => {
  if (typeof window !== 'undefined') {
    const savedLang = window?.localStorage?.getItem('language');
    if (!savedLang)
      window?.localStorage?.setItem('language', navigator.language);
    const selectedLang = _.toUpper(savedLang ?? navigator.language);
    return selectedLang?.includes('FR') ? contentFR : contentEN;
  }
  return contentEN;
};

export default content();
