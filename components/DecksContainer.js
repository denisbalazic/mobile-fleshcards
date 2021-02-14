import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import DeckList from "./DeckList";
import NewDeck from "./NewDeck";

const Tab = createBottomTabNavigator();

const DecksContainer = ({ navigation }) => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#006d77",
        inactiveTintColor: "gray",
        labelStyle: {
          fontSize: 24,
          margin: 0,
          padding: 8,
        },
      }}
    >
      <Tab.Screen name="DeckList" component={DeckList} navigation={navigation} />
      <Tab.Screen name="New Deck" component={NewDeck} navigation={navigation} />
    </Tab.Navigator>
  );
};

export default DecksContainer;
