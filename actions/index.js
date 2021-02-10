import { getInitialData } from "../utils/data";

export const ADD_QUESTION = "ADD_QUESTION";
export const RECEIVE_DECKS = "RECEIVE_DECKS";

// export function handleInitialData() {
//   return (dispatch) => {
//     return getInitialData().then(({ decks }) => {
//       dispatch(receiveDecks(decks));
//     });
//   };
// }

export function handleInitialData() {
  return {
    type: RECEIVE_DECKS,
    decks: getInitialData(),
  };
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
