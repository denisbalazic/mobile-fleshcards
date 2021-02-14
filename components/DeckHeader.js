import React, { useRef } from "react";
import { Pressable, Text, StyleSheet, Animated } from "react-native";

const DeckHeader = ({ deck, handleDeckSelection }) => {
  const anima = useRef(new Animated.Value(1)).current;

  const fadeOut = () => {
    Animated.sequence([
      Animated.timing(anima, {
        toValue: 0.5,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.spring(anima, {
        toValue: 1,
        friction: 4,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleOnPress = (deckName) => {
    fadeOut();
    handleDeckSelection(deckName);
  };

  return (
    <Animated.View style={[styles.container, { transform: [{ scale: anima }] }]}>
      <Pressable onPress={() => handleOnPress(deck.name)}>
        <Text style={styles.title}>{deck.name}</Text>
        <Text style={styles.small}>Questiones: {deck.questions.length}</Text>
      </Pressable>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
    backgroundColor: "#ece4db",
    borderRadius: 6,
  },
  title: {
    fontSize: 36,
  },
  small: {
    fontSize: 20,
  },
});

export default DeckHeader;
