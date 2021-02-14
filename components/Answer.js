import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Answer = ({ answer, handleAnswerShowed, handleAnswer }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{answer}</Text>
      <View style={styles.checkmarks}>
        <TouchableOpacity style={styles.checkmarkTouchable} onPress={() => handleAnswer(true)}>
          <AntDesign name="checksquareo" size={60} color="black" />
          <Text style={styles.checkmarkText}>Correct</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.checkmarkTouchable} onPress={() => handleAnswer(false)}>
          <AntDesign name="closesquareo" size={60} color="black" />
          <Text style={styles.checkmarkText}>Incorrect</Text>
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
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    fontSize: 27,
    color: "#6b705c",
  },
  checkmarks: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  checkmarkTouchable: {
    alignItems: "center",
    marginTop: 12,
    padding: 6,
  },
  checkmarkText: {
    alignSelf: "center",
    fontSize: 20,
    color: "black",
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
