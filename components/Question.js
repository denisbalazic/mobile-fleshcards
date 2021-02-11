import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const Question = ({ question, handleAnswerShowed }) => {
  return (
    <View style={style.container}>
      <Text>This is very difficult question:</Text>
      <Text>{question}</Text>
      <TouchableOpacity onPress={() => handleAnswerShowed(true)}>
        <Text>Show answer</Text>
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

export default Question;
