import React from "react";
import { View, Text, StyleSheet } from "react-native";

const NewDeck = ({}) => {
  return (
    <View style={style.container}>
      <Text>Some text from NewDeck</Text>
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

export default NewDeck;
