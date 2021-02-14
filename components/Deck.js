import React from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Deck = ({ navigation, currentDeck }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{currentDeck.name}</Text>
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

const mapStateToProps = ({ currentDeck }) => {
  return {
    currentDeck,
  };
};

export default connect(mapStateToProps)(Deck);
