import React, { MouseEventHandler, useMemo, useState } from "react";
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

interface SingleQuestion {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export default function QuizQuestion({
  amount,
  category,
  difficulty,
  type,
}: QuizParams) {
  const { data, isFetching, isSuccess } = useGetQuizQuery({
    amount,
    category,
    difficulty,
    type,
  });

  const dispatch = useAppDispatch();

  const questionIndex = useAppSelector((state) => state.questionIndex.qIndex);
  const score = useAppSelector((state) => state.score.score);
  const selected = useAppSelector((state) => state.selected.selected);

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
      const wrong = [...question.incorrect_answers];
      const type = question.type;

      if (type === "boolean") {
        return ["True", "False"];
      } else {
        const rand = Math.floor(Math.random() * wrong.length);
        wrong.splice(rand, 0, correct);
        return wrong;
      }
    };
    const questions = BuildQuestionList(currentQuestion);
    console.log(currentQuestion.correct_answer);

    const handleSelectAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
      e.preventDefault();
      dispatch(setSelected(e.currentTarget.value));
    };
    const handleSubmitAnswer = () => {
      if (selected === currentQuestion.correct_answer) {
        dispatch(plusOne());
        toast("Right! Ready for the next Question?");
        setTimeout(() => {
          dispatch(increment());
        }, 2500);
      } else {
        toast("Wrong! Better luck next time");
      }
    };
    return (
      <Container>
        <QuestionTitle>
          Quiz Question {questionIndex + 1} of {}
        </QuestionTitle>
        <QuestionTitle size={3}>{currentQuestion.category}</QuestionTitle>

        <QuestionOptions max={90}>
          {parse(`${currentQuestion.question}`)}
        </QuestionOptions>
        <ChoiceWrapper>
          {questions.map((q, i) => {
            return (
              <Choice key={i} value={q} onClick={(e) => handleSelectAnswer(e)}>
                {q}
              </Choice>
            );
          })}
        </ChoiceWrapper>
        <ButtonWrapper>
          {questionIndex > 0 && <ActionButton text={"Back"}></ActionButton>}
          <Button onClick={handleSubmitAnswer}>Submit</Button>
          <ActionButton text={"Next (Skip)"}></ActionButton>
        </ButtonWrapper>
        <QuestionTitle size={2}>Correct Answers: {score}</QuestionTitle>
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
