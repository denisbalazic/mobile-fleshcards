import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Answer = ({ answer }) => {
  return (
    <View style={style.container}>
      <Text>Very clever answer:</Text>
      <Text>{answer}</Text>
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
