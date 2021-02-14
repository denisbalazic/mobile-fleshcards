import { RECEIVE_DECKS, ADD_DECK, ADD_QUESTION, SET_ANSWER_CORRECT } from "../actions/index";

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks,
      };
    case ADD_DECK:
      return {
        ...state,
        [action.name]: {
          name: action.name,
          questions: [],
        },
      };
    case ADD_QUESTION:
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          questions: [...state[action.deckName].questions, action.question],
        },
      };
    case SET_ANSWER_CORRECT:
      const updatedQuestions = [...state[action.deckName].questions];
      updatedQuestions[action.cardNo].isCorrect = action.isCorrect;
      return {
        ...state,
        [action.deckName]: {
          ...state[action.deckName],
          questions: updatedQuestions,
        },
      };
    default:
      return state;
  }
}
