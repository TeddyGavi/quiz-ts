import React, {
  MouseEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import { toast, Toaster } from "react-hot-toast";
import parse from "html-react-parser";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useGetQuizQuery } from "../features/api/fetchQuizSlice";
import { QuizParams } from "../features/api/fetchQuizSlice";
import { ButtonWrapper, Container, Title } from "./Settings.styled";
import {
  QuestionOptions,
  QuestionTitle,
  Choice,
  ChoiceWrapper,
} from "./Question.styled";
import ActionButton from "./ActionButton";
import { plusOne } from "../features/score/scoreSlice";
import { Button } from "./Button.styled";
import { setSelected } from "../features/selectedAnswer.ts/selectedSlice";
import { increment } from "../features/questionIndex/indexSlice";
import Question from "./Question";

export interface SingleQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function QuizQuestion() {
  const dispatch = useAppDispatch();

  const questionIndex = useAppSelector((state) => state.questionIndex.qIndex);
  // const selected = useAppSelector((state) => state.selected.selected);
  const amount = useAppSelector((state) => state.amount.amount);
  const category = useAppSelector((state) => state.category.category);
  const difficulty = useAppSelector((state) => state.difficulty.difficulty);
  const type = useAppSelector((state) => state.type.type);
  const [questions, setQuestions] = useState<string[]>([]);

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
  } else if (isSuccess) {
    const currentQuestion = data.results[questionIndex];

    return <Question {...currentQuestion} />;
  } else {
    return (
      <Container>
        <Title>Error...Refresh page</Title>
      </Container>
    );
  }
}
