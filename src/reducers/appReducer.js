import Types from '../actions/types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
  showHomePage: true,
  showContactPage: false
});

const toggleHomePage = (state, action) =>
  state.set("showHomePage", !state.app.showHomePage)

const toggleContactPage = (state, action) =>
  state.set("showContactPage", !state.app.showContactPage)

const ACTION_HANDLERS = {
  [Types.SHOW_HOMEPAGE]: toggleHomePage,
  [Types.SHOW_CONTACT]: toggleContactPage
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
