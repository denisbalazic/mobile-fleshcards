import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Deck = ({ navigation, currentDeck }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>{currentDeck.name}</Text>
      </View>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("Card")}>
        <Text>Start Quiz</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.touchable} onPress={() => navigation.navigate("NewQuestion")}>
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

const mapStateToProps = ({ currentDeck }) => {
  return {
    currentDeck,
  };
};

export default connect(mapStateToProps)(Deck);
