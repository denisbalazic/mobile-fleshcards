import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { addDeck, setCurrentDeck } from "../actions";

const NewDeck = ({ dispatch, navigation }) => {
  const [deckName, setDeckName] = useState("");

  const handleSubmit = () => {
    dispatch(addDeck(deckName));
    dispatch(setCurrentDeck({ name: deckName, questions: [] }));
    setDeckName("");
    navigation.navigate("Deck", { deckName });
  };

  return (
    <View style={style.container}>
      <Text>Add new deck</Text>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        onChangeText={(text) => setDeckName(text)}
        value={deckName}
      />
      <Button title="Press me" onPress={handleSubmit} />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
  },
});

export default connect()(NewDeck);
