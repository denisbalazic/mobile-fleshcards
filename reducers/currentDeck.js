import { SET_CURRENT_DECK, INCREASE_CURRENT_CARD, RESET_CURRENT_CARD } from "../actions/index";

export default function currentDeck(state = {}, action) {
  switch (action.type) {
    case SET_CURRENT_DECK:
      return {
        ...action.deck,
        cardNo: 0,
      };
    case INCREASE_CURRENT_CARD:
      return {
        ...state,
        cardNo: state.cardNo + 1,
      };
    case RESET_CURRENT_CARD:
      return {
        ...state,
        cardNo: 0,
      };
    default:
      return state;
  }
}
