import Types from './types';

const toggleHomePage = (shouldShow) => ({type: Types.SHOW_HOMEPAGE, shouldShow});

const toggleContactPage = () => ({ type: Types.SHOW_CONTACT});

export default {
  toggleHomePage,
  toggleContactPage
}
