import React from "react";
import { useGetQuizQuery } from "../features/api/fetchQuizSlice";
import { QuizParams } from "../features/api/fetchQuizSlice";

export default function QuizQuestion(props: QuizParams) {
  const { amount, category, difficulty, type } = props;

  const { data, isFetching, isSuccess } = useGetQuizQuery({
    amount,
    category,
    difficulty,
    type,
  });
  console.log(data);

  return <div>QuizQuestion</div>;
}
