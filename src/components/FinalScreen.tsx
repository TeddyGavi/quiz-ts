import React from "react";
import { reset, startOver } from "../features/questionIndex/indexSlice";
import ActionButton from "./ActionButton";
import { QuestionTitle } from "./Question.styled";
import { ButtonWrapper, Container, Title } from "./Settings.styled";

export default function FinalScreen() {
  return (
    <Container>
      <Title>All Done!</Title>
      <QuestionTitle size={3}>What would you like to do?</QuestionTitle>
      <ButtonWrapper>
        <ActionButton text={"New Quiz?"} action={reset}></ActionButton>
        <ActionButton text="Same Quiz Again?" action={startOver}></ActionButton>
        {/* <ActionButton text="Only Incorrect Questions"></ActionButton> */}
      </ButtonWrapper>
    </Container>
  );
}
