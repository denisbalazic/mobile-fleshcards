import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeckHeader = ({ deck }) => {
  return (
    <View style={styles.container}>
      <Text>{deck.name}</Text>
      <Text>{deck.questions.length}</Text>
      <Text>Some text from DeckHeaderss</Text>
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
