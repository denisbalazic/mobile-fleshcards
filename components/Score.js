import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Score = ({ questions, resetQuiz, navigation }) => {
  const handleBackToDeck = () => {
    resetQuiz();
    navigation.navigate("Deck");
  };
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>You have finished quiz!</Text>
        <Text style={styles.text}>Number of questions: {questions.length}</Text>
        <Text style={styles.text}>
          Correct answers: {questions.filter((q) => q.isCorrect).length}
        </Text>
      </View>
      <View>
        <TouchableOpacity style={styles.touchable} onPress={resetQuiz}>
          <Text style={styles.touchableText}>Start over</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.touchable} onPress={handleBackToDeck}>
          <Text style={styles.touchableText}>Back to Deck</Text>
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
  },
  text: {
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

export default Score;
