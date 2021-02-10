import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const DeckHeader = ({ deckName, deckCount, navigation }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={() => navigation.navigate("Deck", { deckName })}>
        <Text>{deckName}</Text>
        <Text>{deckCount}</Text>
        <Text>Some text from DeckHeader</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
});

export default DeckHeader;
