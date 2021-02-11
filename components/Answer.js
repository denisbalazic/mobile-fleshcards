import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Answer = ({ answer, handleAnswerShowed, handleAnswer }) => {
  return (
    <View style={style.container}>
      <Text>Very clever answer:</Text>
      <Text>{answer}</Text>
      <TouchableOpacity onPress={() => handleAnswerShowed(false)}>
        <Text>Show Question</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(true)}>
        <Text>Correct</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleAnswer(false)}>
        <Text>Incorrect</Text>
      </TouchableOpacity>
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

export default Answer;
