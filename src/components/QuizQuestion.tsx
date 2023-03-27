import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../app/hooks";
import { useGetQuizQuery } from "../features/api/fetchQuizSlice";
import { QuizParams } from "../features/api/fetchQuizSlice";
import { Container, Title } from "./Settings.styled";

interface SingleQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const QuestionTitle = styled.h4`
  color: ghostwhite;
  font-size: 2vh;
  margin-bottom: 1rem;
  padding: 1rem;
  letter-spacing: 0.5vh;
`;

export const QuestionOptions = styled.div``;
export default function QuizQuestion({
  amount,
  category,
  difficulty,
  type,
}: QuizParams) {
  // const { amount, category, difficulty, type } = props;

  const { data, isFetching, isSuccess } = useGetQuizQuery({
    amount,
    category,
    difficulty,
    type,
  });

  const questionIndex = useAppSelector((state) => state.questionIndex.qIndex);
  /* 
    "category": "Entertainment: Video Games",
  "type": "multiple",
  "difficulty": "medium",
  "question": "Who&#039;s the creator of Geometry Dash?",
  "correct_answer": "Robert Topala",
  "incorrect_answers": [
    "Scott Cawthon",
    "Adam Engels",
    "Andrew Spinks"
  ]
} */

  if (!isFetching && isSuccess) {
    const currentQuestion = data.results[questionIndex];

    const BuildQuestionList = (question: SingleQuestion) => {
      const correct = question.correct_answer;
      const wrong = question.incorrect_answers;
      const type = question.type;

      if (type === "boolean") {
        console.log(["True", "False"]);
      } else {
        const rand = Math.floor(Math.random() * wrong.length - 1);
        console.log(wrong.splice(rand, 0, correct));
      }
    };

    BuildQuestionList(currentQuestion);
    return (
      <Container>
        <Title>Quiz Question {questionIndex + 1} </Title>
        <QuestionTitle>{currentQuestion.category}</QuestionTitle>
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  }
}
