import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Question from "./Question";
import Answer from "./Answer";
import Score from "./Score";
import { setAnswerCorrect, increaseCurrentCard, resetCurrentCard } from "../actions";
import { setLocalNotification, clearLocalNotification } from "../utils/helpers";

const Card = ({ questions, currentDeck, dispatch, navigation }) => {
  const [answerShowed, setAnswerShowed] = useState(false);
  const handleAnswer = (isCorrect) => {
    dispatch(setAnswerCorrect(isCorrect, currentDeck));
    dispatch(increaseCurrentCard());
    setAnswerShowed(false);
  };
  const resetQuiz = () => {
    dispatch(resetCurrentCard());
    setAnswerShowed(false);
    clearLocalNotification().then(setLocalNotification());
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{currentDeck.name}</Text>
        <Text style={styles.small}>
          {currentDeck.cardNo}/{questions.length}
        </Text>
      </View>
      {questions.length === currentDeck.cardNo ? (
        <Score questions={questions} resetQuiz={resetQuiz} navigation={navigation} />
      ) : !answerShowed ? (
        <Question
          question={questions[currentDeck.cardNo].question}
          handleAnswerShowed={setAnswerShowed}
        />
      ) : (
        <Answer
          answer={questions[currentDeck.cardNo].answer}
          handleAnswerShowed={setAnswerShowed}
          handleAnswer={handleAnswer}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 8,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: 40,
  },
  title: {
    fontSize: 36,
  },
  small: {
    fontSize: 20,
  },
});

const mapStateToProps = ({ decks, currentDeck }) => {
  return {
    questions: decks[currentDeck.name].questions,
    currentDeck,
  };
};

export default connect(mapStateToProps)(Card);
