import { useState } from "react";
import { useAppSelector } from "../app/hooks";
import { useGetQuizQuery } from "../features/api/fetchQuizSlice";
import { Container, Title } from "./Settings.styled";
import Question from "./Question";
import DBError from "./DBError";

export default function QuizQuestion() {
  const questionIndex = useAppSelector((state) => state.questionIndex.qIndex);
  const amount = useAppSelector((state) => state.amount.amount);
  const category = useAppSelector((state) => state.category.category);
  const difficulty = useAppSelector((state) => state.difficulty.difficulty);
  const type = useAppSelector((state) => state.type.type);

  const { data, isFetching, isSuccess } = useGetQuizQuery({
    amount,
    category,
    difficulty,
    type,
  });

  if (isFetching) {
    return (
      <Container>
        <Title>Loading...</Title>
      </Container>
    );
  } else if (isSuccess && data.results.length) {
    const currentQuestion = data.results[questionIndex];
    return <Question {...currentQuestion} />;
  } else {
    return <DBError />;
  }
}
