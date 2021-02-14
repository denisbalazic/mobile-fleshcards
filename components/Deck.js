import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Deck = ({ navigation, deckName, numOfQuestions }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{deckName}</Text>
        <Text style={styles.small}>{numOfQuestions}</Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Card")}>
          <Text style={styles.touchableText}>Start Quiz</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.touchable}
          onPress={() => navigation.navigate("NewQuestion")}
        >
          <Text style={styles.touchableText}>Add Question</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
    marginBottom: 30,
  },
  small: {
    fontSize: 20,
  },
  touchable: {
    margin: 10,
    padding: 6,
    backgroundColor: "#6b705c",
  },
  touchableText: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
});

const mapStateToProps = ({ currentDeck, decks }) => {
  return {
    deckName: currentDeck.name,
    numOfQuestions: decks[currentDeck.name].questions.length,
  };
};

export default connect(mapStateToProps)(Deck);
