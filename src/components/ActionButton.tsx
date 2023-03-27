import React from "react";
import { useGetQuizQuery } from "../features/api/fetchQuizSlice";
import { Button } from "./Button.styled";
import { QuizParams } from "../features/api/fetchQuizSlice";
import { useAppDispatch } from "../app/hooks";
import { decrement, increment } from "../features/questionIndex/indexSlice";

interface ButtonProps {
  text: string;
  action?: string;
}

export default function ActionButton({ text, action }: ButtonProps) {
  const dispatch = useAppDispatch();

  return <Button onClick={() => dispatch(increment())}>{text}</Button>;
}
