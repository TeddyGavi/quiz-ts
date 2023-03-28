import { Component, useState } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import React from "react";
import { GlobalStyles } from "./styles/GlobalStyles";
import Settings from "./components/Settings";
import styled from "styled-components";
import QuizQuestion from "./components/Quiz";
import { Category, useGetCategoriesQuery } from "./features/api/fetchQuizSlice";
import { Container, Title } from "./components/Settings.styled";
import FinalScreen from "./components/FinalScreen";

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;

  @media only screen and (max-width: 420px) {
    max-width: 75vw;
    margin: 0 auto;
  }
`;

function App() {
  const dispatch = useAppDispatch();
  const questionIndex = useAppSelector((state) => state.questionIndex.qIndex);
  // const {data} = useGetQuizQuery()
  // const questionsArr = useAppSelector((state) => state.api);
  // console.log(questionsArr);
  const amount = useAppSelector((state) => state.amount.amount);
  // const category = useAppSelector((state) => state.category.category);
  // const difficulty = useAppSelector((state) => state.difficulty.difficulty);
  // const type = useAppSelector((state) => state.type.type);
  const { data, isFetching, isSuccess } = useGetCategoriesQuery();

  const trivia_categories: Category[] = data?.trivia_categories || [];

  if (!isFetching && isSuccess) {
    let page: React.FunctionComponentElement<Component> = (
      <Title>LOADING...</Title>
    );
    // let navButtons: React.FunctionComponent<Component>;

    if (questionIndex < 0) {
      page = <Settings trivia_categories={trivia_categories} />;
    } else if (questionIndex >= 0 && questionIndex + 1 !== +amount) {
      page = <QuizQuestion />;
    } else if (questionIndex + 1 === +amount) {
      page = <FinalScreen />;
    }

    return (
      <React.Fragment>
        <GlobalStyles />
        <Main>{page}</Main>
      </React.Fragment>
    );
  } else {
    return (
      <Container>
        <Title>LOADING...</Title>
      </Container>
    );
  }
}

export default App;
