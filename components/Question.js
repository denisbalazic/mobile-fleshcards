import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Question = ({ question, handleAnswerShowed }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{question}</Text>
      <TouchableOpacity style={styles.touchable} onPress={() => handleAnswerShowed(true)}>
        <Text style={styles.touchableText}>Show answer</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    margin: 10,
  },
  text: {
    marginTop: 30,
    marginBottom: 30,
    fontSize: 27,
    color: "#6b705c",
  },
  touchable: {
    padding: 6,
    backgroundColor: "#6b705c",
  },
  touchableText: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
});

export default Question;
