import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { addQuestion } from "../actions";

const NewQuestion = ({ deckName, dispatch, navigation }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const handleSubmit = () => {
    dispatch(addQuestion({ question, answer, deckName }));
    setQuestion("");
    setAnswer("");
    navigation.navigate("Deck", { deckName });
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Add new question</Text>
      <Text>Question</Text>
      <TextInput style={styles.input} onChangeText={(text) => setQuestion(text)} value={question} />
      <Text>Answer</Text>
      <TextInput style={styles.input} onChangeText={(text) => setAnswer(text)} value={answer} />
      <TouchableOpacity style={styles.touchable} onPress={handleSubmit}>
        <Text style={styles.touchableText}>Add question</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
  },
  text: {
    alignSelf: "center",
    marginTop: 30,
    marginBottom: 30,
    fontSize: 27,
    color: "#6b705c",
  },
  input: {
    marginBottom: 12,
    padding: 5,
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
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

const mapStateToProps = ({ currentDeck }) => {
  return {
    deckName: currentDeck.name,
  };
};

export default connect(mapStateToProps)(NewQuestion);
