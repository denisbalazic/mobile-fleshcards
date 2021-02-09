import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Score = ({}) => {
  return (
    <View style={style.container}>
      <Text>Some text from Score</Text>
      <Text></Text>
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
