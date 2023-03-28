import React, { useMemo, useState } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import {
  Choice,
  ChoiceWrapper,
  QuestionOptions,
  QuestionTitle,
} from "./Question.styled";
import { toast } from "react-hot-toast";
import parse from "html-react-parser";
import { ButtonWrapper, Container } from "./Settings.styled";
import { plusOne } from "../features/score/scoreSlice";
import { Button } from "./Button.styled";
import { increment, reset } from "../features/questionIndex/indexSlice";
import { Results } from "../features/api/fetchQuizSlice";
import ActionButton from "./ActionButton";

export default function Question(currentQuestion: Results) {
  const dispatch = useAppDispatch();
  const score = useAppSelector((state) => state.score.score);
  const questionIndex = useAppSelector((state) => state.questionIndex.qIndex);
  const amount = useAppSelector((state) => state.amount.amount);

  const [selected, setSelected] = useState("");

  const handleSelectAnswer = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>
  ) => {
    setSelected(e.currentTarget.innerText);
  };
  const handleSubmitAnswer = () => {
    if (selected === currentQuestion.correct_answer) {
      toast("Right! Ready for the next Question?");
      setTimeout(() => {
        dispatch(plusOne());
        dispatch(increment());
        setSelected("");
      }, 2500);
    } else {
      toast("Wrong! Better luck next time");
      setTimeout(() => {
        dispatch(increment());
        setSelected("");
      }, 2500);
    }
  };

  const memoQuestion = useMemo(() => {
    const type = currentQuestion.type;
    if (type === "boolean") {
      return ["True", "False"];
    } else {
      const correct = currentQuestion.correct_answer;
      const wrong = [...currentQuestion.incorrect_answers];
      const rand = Math.floor(Math.random() * wrong.length);
      wrong.splice(rand, 0, correct);
      return wrong;
    }
  }, [questionIndex]);
  return (
    <Container>
      <QuestionTitle>
        Quiz Question {questionIndex + 1} of {amount}
      </QuestionTitle>
      <QuestionTitle size={3}>{currentQuestion.category}</QuestionTitle>

      <QuestionOptions max={90}>
        {parse(`${currentQuestion.question}`)}
      </QuestionOptions>
      <ChoiceWrapper>
        {memoQuestion.map((q, i) => {
          return (
            <Choice
              selected={selected === q}
              key={i}
              onClick={(e) => handleSelectAnswer(e)}
            >
              {parse(`${q}`)}
            </Choice>
          );
        })}
      </ChoiceWrapper>
      <ButtonWrapper>
        {/* {questionIndex > 0 && <ActionButton text={"Back"}></ActionButton>} */}
        <Button onClick={handleSubmitAnswer}>Submit</Button>
        <ActionButton text={"Skip Question"}></ActionButton>
      </ButtonWrapper>
      <QuestionTitle size={2}>Correct Answers: {score}</QuestionTitle>
      <ActionButton text={"Rest Quiz"} action={reset}></ActionButton>
    </Container>
  );
}
