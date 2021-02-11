import React from "react";
import { StyleSheet } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

const Tab = createBottomTabNavigator();

const DecksContainer = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "tomato",
        inactiveTintColor: "gray",
        style: styles.tabnav,
      }}
    >
      <Tab.Screen name="DeckList" component={DeckList} navigation={navigation} />
      <Tab.Screen name="New Deck" component={NewDeck} navigation={navigation} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabnav: {
    backgroundColor: "#dfdfdf",
    fontSize: 20,
  },
});

export default DecksContainer;
