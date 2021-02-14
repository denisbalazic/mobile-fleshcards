import React from "react";
import { View, Text, StyleSheet } from "react-native";

const DeckHeader = ({ deck }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{deck.name}</Text>
      <Text style={styles.small}>Questiones: {deck.questions.length}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
    backgroundColor: "#ece4db",
    borderRadius: 6,
  },
  title: {
    fontSize: 36,
  },
  small: {
    fontSize: 20,
  },
});

export default DeckHeader;
