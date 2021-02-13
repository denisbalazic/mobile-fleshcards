import AsyncStorage from "@react-native-community/async-storage";

const DECK_KEY = "Deckkey";

export async function addNewDeck(deckName) {
  const strDecks = (await AsyncStorage.getItem(DECK_KEY)) || {};
  console.log(strDecks);
  decks = JSON.parse(strDecks);
  const updatedDecks = JSON.stringify({
    ...decks,
    [deckName]: { name: deckName, questions: [] },
  });
  AsyncStorage.setItem(DECK_KEY, updatedDecks);
  console.log(updatedDecks);
}
