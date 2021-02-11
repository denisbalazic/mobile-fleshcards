import React from "react";
import { View, Text, Pressable, Alert } from "react-native";
import { connect } from "react-redux";
import { setCurrentDeck } from "../actions";
import DeckHeader from "./DeckHeader";

const DeckList = ({ navigation, decks, dispatch }) => {
  const handleDeckSelection = (deckName) => {
    dispatch(setCurrentDeck({ name: deckName }));
    navigation.navigate("Deck", { deckName });
  };
  return (
    <View>
      <Text>Some text from DeckList</Text>
      {decks.map((deck, id) => (
        <Pressable key={id} onPress={() => handleDeckSelection(deck.name)}>
          <DeckHeader key={id} deck={deck} />
        </Pressable>
      ))}
    </View>
  );
};

const mapStateToProps = ({ decks, currentCard }) => {
  return {
    decks: decks && Object.values(decks),
    currentCard,
  };
};

export default connect(mapStateToProps)(DeckList);
