import { TOGGLE_ACTIVE_ARTICLE } from './action-types';

export function articlePageToggle(article) {
  return {
    type: actionTypes.TOGGLE_ACTIVE_ARTICLE,
    article
  };
}