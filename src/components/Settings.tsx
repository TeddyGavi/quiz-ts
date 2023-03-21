import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import { Category } from "open-trivia-db";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAmount } from "../features/amount/amountSlice";
import { toggleLoading } from "../features/loading/loadingSlice";

type category = {
  id: number;
  name: string;
};
type categoryAPI = category[];

type ButtonProps = {
  primary?: string;
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

const SelectOptions = styled.select`
  color: black;
  font-size: 1rem;
  scrollbar-width: thin;
  width: 80%;
  height: 2rem;
  padding: 5px;
`;

const SimpleInput = styled.input`
  width: 80%;
  font-size: 1rem;
  height: 2rem;
  padding: 5px;
`;

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.25vh;
  padding: 10px, 0;
  color: antiquewhite;
`;

const Title = styled.h1`
  color: ghostwhite;
  font-size: 4vh;
  font-weight: bolder;
  font-style: italic;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;

const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "white" : "black")};
  color: ${(props) => (props.primary ? "black" : "white")};
  font-size: 1rem;
  margin: 1rem;
  padding: 0.25rem 1rem;
  border: 2px solid black;
  border-radius: 3px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    color: var(--gray);
    box-shadow: 0px 0px 5px whitesmoke;
  }
`;

const BASE_URL = `https://opentdb.com`;
export default function Settings() {
  const [difficulty, setDifficultly] = useState("Any");
  const [categories, setCategories] = useState<categoryAPI>([]);
  const [category, setCategory] = useState("Any");
  const [type, setType] = useState("Any");
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loading.loading);
  const amount = useAppSelector((state) => state.amount.amount);
  useEffect(() => {
    dispatch(toggleLoading(false));
    fetch(`${BASE_URL}/api_category.php`)
      .then((res) => res.json())
      .then((res) => {
        setCategories(res.trivia_categories);
        dispatch(toggleLoading(true));
      });
  }, []);

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value || "Any");
  };

  const handleAmountSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = Number.isNaN(e.target.valueAsNumber)
      ? 0
      : e.target.valueAsNumber || 0;
    if (input < 0) {
      input = 0;
    } else if (input > 50) {
      input = 50;
    }
    dispatch(setAmount(input));
  };

  const handleDifficultySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setDifficultly(e.target.value.toLowerCase());
  };

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setType(e.target.value.toLowerCase());
  };

  if (loading) {
    return (
      <Container>
        <Title>Select the options for your quiz...</Title>
        <Label htmlFor="amount">How Many Questions? (Max 50) </Label>
        <SimpleInput
          type="number"
          min={1}
          max={50}
          value={amount}
          onChange={handleAmountSelect}
        ></SimpleInput>
        <Label htmlFor="category">Category:</Label>
        <SelectOptions value={category} onChange={handleCategorySelect}>
          <option>Any</option>
          {categories &&
            categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
        </SelectOptions>
        <Label htmlFor="difficulty"> Difficulty:</Label>
        <SelectOptions value={difficulty} onChange={handleDifficultySelect}>
          <option>Any</option>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </SelectOptions>
        <Label htmlFor="type"> Type:</Label>
        <SelectOptions value={type} onChange={handleTypeSelect}>
          <option>Any</option>
          <option value={`multiple`}>Multiple Choice</option>
          <option value={`boolean`}>True / False</option>
        </SelectOptions>
        <ButtonWrapper>
          <Button type="submit">Start Quiz</Button>
          <Button type="submit">Start Default Quiz</Button>
        </ButtonWrapper>
      </Container>
    );
  } else {
    return (
      <Container>
        <Title>LOADING...</Title>
      </Container>
    );
  }
}
