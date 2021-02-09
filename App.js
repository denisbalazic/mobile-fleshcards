import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DeckList from "./components/DeckList";
import Deck from "./components/Deck";
import NewQuestion from "./components/NewQuestion";
import NewDeck from "./components/NewDeck";
import Question from "./components/Question";
import Answer from "./components/Answer";
import Score from "./components/Score";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="DeckList" component={DeckList} />
        <Stack.Screen name="Deck" component={Deck} />
        <Stack.Screen name="NewQuestion" component={NewQuestion} />
        <Stack.Screen name="NewDeck" component={NewDeck} />
        <Stack.Screen name="Question" component={Question} />
        <Stack.Screen name="Answer" component={Answer} />
        <Stack.Screen name="Score" component={Score} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});