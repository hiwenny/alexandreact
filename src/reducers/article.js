import { TOGGLE_ACTIVE_ARTICLE } from '../actions/action-types';

const defaultState = {};

export default function article(state = defaultState, action) {
  switch (action.type) {
    case TOGGLE_ACTIVE_ARTICLE:
      return action.article;
    // case RESET_ACTIVE_ARTICLE:
    //   return defaultState;
    default:
      return state;
  }
}
