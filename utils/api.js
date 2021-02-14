import AsyncStorage from "@react-native-community/async-storage";

const DECK_KEY = "Deckkey";

export async function fetchDecks() {
  const strDecks = (await AsyncStorage.getItem(DECK_KEY)) || "{}";
  decks = JSON.parse(strDecks);
  return decks;
}

//use for deleting Decks from mobile
export async function resetDecks(deckName) {
  AsyncStorage.removeItem(DECK_KEY);
}

export async function addNewDeck(deckName) {
  const strDecks = (await AsyncStorage.getItem(DECK_KEY)) || "{}";
  decks = JSON.parse(strDecks);
  const updatedDecks = JSON.stringify({
    ...decks,
    [deckName]: { name: deckName, questions: [] },
  });
  AsyncStorage.setItem(DECK_KEY, updatedDecks);
}

export async function addBatchOfDecks(newDecks) {
  const strDecks = (await AsyncStorage.getItem(DECK_KEY)) || "{}";
  decks = JSON.parse(strDecks);
  const updatedDecks = JSON.stringify({
    ...decks,
    ...newDecks,
  });
  AsyncStorage.setItem(DECK_KEY, updatedDecks);
}

export async function addNewQuestion({ question, answer, deckName }) {
  const strDecks = (await AsyncStorage.getItem(DECK_KEY)) || {};
  decks = JSON.parse(strDecks);
  const updatedDecks = JSON.stringify({
    ...decks,
    [deckName]: {
      ...decks[deckName],
      questions: [...decks[deckName].questions, { question, answer }],
    },
  });
  AsyncStorage.setItem(DECK_KEY, updatedDecks);
}
