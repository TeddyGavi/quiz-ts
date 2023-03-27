import React from "react";
import { useGetQuizQuery } from "../features/api/fetchQuizSlice";
import { Button } from "./Button.styled";
import { QuizParams } from "../features/api/fetchQuizSlice";

interface ButtonProps extends QuizParams {
  text: string;
}

export default function FetchButton(props: ButtonProps) {
  const { text, amount, category, difficulty, type } = props;

  const { data, isFetching, isSuccess } = useGetQuizQuery({
    amount,
    category,
    difficulty,
    type,
  });
  console.log(data);

  return <Button>{text}</Button>;
}
