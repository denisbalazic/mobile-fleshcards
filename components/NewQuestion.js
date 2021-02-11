import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
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
    <View style={style.container}>
      <Text>Add new question</Text>
      <Text>Question</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setQuestion(text)}
        value={question}
      />
      <Text>Answer</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setAnswer(text)}
        value={answer}
      />
      <Button title="Press me" onPress={handleSubmit} />
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

const mapStateToProps = ({ currentDeck }) => {
  return {
    deckName: currentDeck.name,
  };
};

export default connect(mapStateToProps)(NewQuestion);
