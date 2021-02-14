import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Answer = ({ answer, handleAnswerShowed, handleAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{answer}</Text>
      <View>
        <TouchableOpacity style={styles.touchable} onPress={() => handleAnswer(true)}>
          <Text style={styles.touchableText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={() => handleAnswer(false)}>
          <Text style={styles.touchableText}>Incorrect</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.touchable} onPress={() => handleAnswerShowed(false)}>
        <Text style={styles.touchableText}>Show Question</Text>
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
    marginTop: 12,
    padding: 6,
    backgroundColor: "#6b705c",
  },
  touchableText: {
    alignSelf: "center",
    fontSize: 20,
    color: "white",
  },
});

export default Answer;
