import Types from './types';

const toggleHomePage = () => ({type: Types.SHOW_HOMEPAGE});

const toggleContactPage = () => ({ type: Types.SHOW_CONTACT});

export default {
  toggleHomePage,
  toggleContactPage
}
