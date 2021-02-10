import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Deck = ({ route, navigation }) => {
  const { deckName } = route.params;
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{deckName}</Text>
      </View>
      <TouchableOpacity
        style={styles.touchable}
        onPress={() => navigation.navigate("Question", { deckName })}
      >
        <Text>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable}>
        <Text>Add Question</Text>
      </TouchableOpacity>
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
  header: {
    fontSize: 30,
  },
  touchable: {
    margin: 10,
  },
});

export default Deck;
