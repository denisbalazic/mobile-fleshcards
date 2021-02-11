import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const Score = ({ questions, resetQuiz, navigation }) => {
  return (
    <View style={style.container}>
      <Text>Some text from Score</Text>
      <Text>Number of questions: {questions.length}</Text>
      <Text>Correct answers: {questions.filter((q) => q.isCorrect).length}</Text>
      <Button title="Quiz again" onPress={resetQuiz} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
});

export default Score;
