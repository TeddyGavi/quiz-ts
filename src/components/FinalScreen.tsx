import React from "react";
import { useAppSelector } from "../app/hooks";
import { reset, startOver } from "../features/questionIndex/indexSlice";
import ActionButton from "./ActionButton";
import { QuestionTitle } from "./Question.styled";
import { ButtonWrapper, Container, Title } from "./Settings.styled";

export default function FinalScreen() {
  const score = useAppSelector((state) => state.score.score);
  const amount = useAppSelector((state) => state.amount.amount);
  return (
    <Container>
      <Title>All Done!</Title>
      <QuestionTitle size={3}>What would you like to do?</QuestionTitle>
      <QuestionTitle size={2}>
        Your Final Score {score} / {amount} correct
      </QuestionTitle>
      <ButtonWrapper>
        <ActionButton text={"New Quiz?"} action={reset}></ActionButton>
        <ActionButton text="Same Quiz Again?" action={startOver}></ActionButton>
        {/* <ActionButton text="Only Incorrect Questions"></ActionButton> */}
      </ButtonWrapper>
    </Container>
  );
}
