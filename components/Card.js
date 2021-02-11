import React, { useState } from "react";
import { connect } from "react-redux";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import Question from "./Question";
import Answer from "./Answer";
import Score from "./Score";
import { setAnswerCorrect, increaseCurrentCard, resetCurrentCard } from "../actions";

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
  };
  return (
    <View style={style.container}>
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

const style = StyleSheet.create({
  container: {
    margin: 10,
    padding: 8,
    backgroundColor: "purple",
    borderRadius: 6,
  },
});

const mapStateToProps = ({ decks, currentDeck }) => {
  return {
    questions: decks[currentDeck.name].questions,
    currentDeck,
  };
};

export default connect(mapStateToProps)(Card);
