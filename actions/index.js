import { fetchDecks, addNewDeck, addNewQuestion } from "../utils/api";
import { getInitialData } from "../utils/data";

export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const SET_CURRENT_DECK = "SET_CURRENT_DECK";
export const INCREASE_CURRENT_CARD = "INCREASE_CURRENT_CARD";
export const SET_ANSWER_CORRECT = "SET_ANSWER_CORRECT";
export const ADD_QUESTION = "ADD_QUESTION";
export const ADD_DECK = "ADD_DECK";
export const RESET_CURRENT_CARD = "RESET_CURRENT_CARD";

export function handleInitialData() {
  return (dispatch) => {
    return fetchDecks().then((decks) => {
      dispatch(receiveDecks(decks));
    });
  };
}

export function receiveDecks(decks) {
  return {
    type: RECEIVE_DECKS,
    decks,
  };
}

// export function handleInitialData() {
//   const decks = fetchDecks();
//   console.log("from actions: ", decks);
//   return {
//     type: RECEIVE_DECKS,
//     decks: getInitialData(),
//   };
// }

export function setCurrentDeck(deck) {
  return {
    type: SET_CURRENT_DECK,
    deck,
  };
}

export function increaseCurrentCard() {
  return {
    type: INCREASE_CURRENT_CARD,
  };
}
export function resetCurrentCard() {
  return {
    type: RESET_CURRENT_CARD,
  };
}

export function setAnswerCorrect(isCorrect, currentDeck) {
  return {
    type: SET_ANSWER_CORRECT,
    isCorrect,
    deckName: currentDeck.name,
    cardNo: currentDeck.cardNo,
  };
}

export function addQuestion(question) {
  return (dispatch) => {
    return addNewQuestion(question).then(() => {
      dispatch(addQuestionToStore(question));
    });
  };
}

export function addQuestionToStore({ question, answer, deckName }) {
  return {
    type: ADD_QUESTION,
    question: { question, answer },
    deckName,
  };
}

export function addDeck(name) {
  addNewDeck(name);
  return {
    type: ADD_DECK,
    name,
  };
}
