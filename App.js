import { StatusBar } from "expo-status-bar";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { StyleSheet, Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { handleInitialData } from "./actions";
import DecksContainer from "./components/DecksContainer";
import Deck from "./components/Deck";
import NewQuestion from "./components/NewQuestion";
import Card from "./components/Card";
import Score from "./components/Score";
import { setLocalNotification } from "./utils/helpers";
import { resetDecks } from "./utils/api";

const Stack = createStackNavigator();

function App({ dispatch }) {
  useEffect(() => {
    // resetDecks();
    dispatch(handleInitialData());
    setLocalNotification();
  });
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DecksContainer"
          component={DecksContainer}
          options={{ title: "Deck List" }}
        />
        <Stack.Screen
          name="Deck"
          component={Deck}
          options={({ route }) => ({
            title: route.params.deckName,
          })}
        />
        <Stack.Screen name="Card" component={Card} />
        <Stack.Screen name="NewQuestion" component={NewQuestion} />
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

export default connect()(App);
