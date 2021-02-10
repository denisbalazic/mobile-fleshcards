import React from "react";
import { View, Text } from "react-native";
import { connect } from "react-redux";
import DeckHeader from "./DeckHeader";

const DeckList = ({ navigation, decks }) => {
  // const decks = [
  //   { name: "DEck1", questions: [1, 2, 3, 4, 5, 6] },
  //   { name: "Deck2", questions: [1, 2, 3, 4] },
  // ];
  return (
    <View>
      <Text>Some text from DeckList</Text>
      {decks.map((deck, id) => (
        <DeckHeader
          key={id}
          deckName={deck.name}
          deckCount={deck.questions.length}
          navigation={navigation}
        />
      ))}
    </View>
  );
};

const mapStateToProps = ({ decks }) => {
  return {
    decks: decks && Object.values(decks),
  };
};

export default connect(mapStateToProps)(DeckList);
