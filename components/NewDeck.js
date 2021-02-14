import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
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
    <View style={styles.container}>
      <Text style={styles.text}>Add new deck</Text>
      <Text>Name of new deck:</Text>
      <TextInput style={styles.input} onChangeText={(text) => setDeckName(text)} value={deckName} />
      <TouchableOpacity style={styles.touchable} onPress={handleSubmit}>
        <Text style={styles.touchableText}>Add Deck</Text>
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
    margin: 10,
    padding: 8,
    fontSize: 20,
    alignSelf: "center",
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

export default connect()(NewDeck);
