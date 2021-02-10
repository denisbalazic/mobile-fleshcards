import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";

const NewDeck = ({}) => {
  const [deckName, setDeckName] = useState("");

  const handleSubmit = () => {
    Alert.alert("Simple Button pressed");
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

export default NewDeck;
