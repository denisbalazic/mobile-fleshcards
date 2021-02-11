import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import { addDeck } from "../actions";

const NewDeck = ({ dispatch }) => {
  const [deckName, setDeckName] = useState("");

  const handleSubmit = () => {
    console.log(deckName);
    dispatch(addDeck(deckName));
    setDeckName("");
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
