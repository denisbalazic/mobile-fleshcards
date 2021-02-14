import React from "react";
import { View, Text, Pressable, StyleSheet, Animated } from "react-native";
import { connect } from "react-redux";
import { setCurrentDeck } from "../actions";
import DeckHeader from "./DeckHeader";

const DeckList = ({ navigation, decks, dispatch }) => {
  const handleDeckSelection = (deckName) => {
    dispatch(setCurrentDeck({ name: deckName }));
    navigation.navigate("Deck", { deckName });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Choose a Quiz!</Text>
      {decks.map((deck, id) => (
        <DeckHeader key={id} deck={deck} handleDeckSelection={handleDeckSelection} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
  },
  text: {
    margin: 10,
    padding: 8,
    fontSize: 20,
    alignSelf: "center",
    color: "#6b705c",
  },
});

const mapStateToProps = ({ decks, currentCard }) => {
  return {
    decks: decks && Object.values(decks),
    currentCard,
  };
};

export default connect(mapStateToProps)(DeckList);
