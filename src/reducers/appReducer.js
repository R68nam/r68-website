import Types from '../action/types';
import Immutable from 'seamless-immutable';
import { createReducer } from 'reduxsauce';

export const INITIAL_STATE = Immutable({
  showHomePage: true,
  showContactPage: false
});

const toggleHomePage = (state, action) =>
  state.set("showHomePage", action.shouldShow)

const toggleContactPage = (state, action) =>
  state.set("showContactPage", action.shouldShow)

const ACTION_HANDLERS = {
  [Types.SHOW_HOMEPAGE]: toggleHomePage,
  [Types.SHOW_CONTACT]: toggleContactPage
};

export default createReducer(INITIAL_STATE, ACTION_HANDLERS);
