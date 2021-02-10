import { RECEIVE_DECKS, ADD_QUESTION } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_QUESTION:
      return {
        ...state,
        1: action.question,
      };
    default:
      return state;
  }
}
