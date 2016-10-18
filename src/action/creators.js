import Types from './types';

const toggleHomePage = (shouldShow) => ({type: Types.SHOW_HOMEPAGE, shouldShow});

const toggleContactPage = (shouldShow) => ({ type: Types.SHOW_CONTACT, shouldShow});

export default {
  toggleHomePage,
  toggleContactPage
}
