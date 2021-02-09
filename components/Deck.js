import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Deck = ({ route }) => {
  const { deckName } = route.params;
  return (
    <View style={style.container}>
      <Text>Some text from Deck</Text>
      <Text>{deckName}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
});

export default Deck;
