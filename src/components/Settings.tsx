import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { setAmount } from "../features/amount/amountSlice";
import { setCategory } from "../features/category/categorySlice";
import { setDifficulty } from "../features/difficulty/difficultySlice";
import { toggleLoading } from "../features/loading/loadingSlice";
import { useGetCategoriesQuery } from "../features/api/fetchQuizSlice";
import { setType } from "../features/type/typeSlice";
import { Category } from "../features/api/fetchQuizSlice";
import {
  Container,
  SelectOptions,
  SimpleInput,
  Label,
  Title,
  ButtonWrapper,
} from "./Settings.styled";

import { Button } from "./Button.styled";
import FetchButton from "./FetchButton";

const BASE_URL = `https://opentdb.com`;
export default function Settings() {
  // const [categories, setCategories] = useState<categoryAPI>([]);
  const dispatch = useAppDispatch();
  // const loading = useAppSelector((state) => state.loading.loading);
  const amount = useAppSelector((state) => state.amount.amount);
  const category = useAppSelector((state) => state.category.category);
  const difficulty = useAppSelector((state) => state.difficulty.difficulty);
  const type = useAppSelector((state) => state.type.type);

  const { data, isFetching } = useGetCategoriesQuery();
  const categories: Category[] = data?.trivia_categories || [];

  // useEffect(() => {
  //   dispatch(toggleLoading(true));
  //   fetch(`${BASE_URL}/api_category.php`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setCategories(res.trivia_categories);
  //       dispatch(toggleLoading(false));
  //     });
  // }, []);

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const input = e.target.value || "any";
    dispatch(setCategory(input));
  };

  const handleAmountSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    let input = Number.isNaN(e.target.valueAsNumber)
      ? ""
      : e.target.valueAsNumber || 0;

    dispatch(setAmount(input));
  };

  const handleDifficultySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setDifficulty(e.target.value.toLowerCase()));
  };

  const handleTypeSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setType(e.target.value.toLowerCase()));
  };

  if (!isFetching) {
    return (
      <Container>
        <Title>Select the options for your quiz...</Title>
        <Label htmlFor="amount">How Many Questions? (Max 50) </Label>
        <SimpleInput
          type="number"
          min={0}
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
          <option value="" key="0">
            Any
          </option>
          <option value="easy" key="1">
            Easy
          </option>
          <option value="medium" key="2">
            Medium
          </option>
          <option value="hard" key="3">
            Hard
          </option>
        </SelectOptions>
        <Label htmlFor="type"> Type:</Label>
        <SelectOptions value={type} onChange={handleTypeSelect}>
          <option>Any</option>
          <option value="multiple">Multiple Choice</option>
          <option value="boolean">True / False</option>
        </SelectOptions>
        <ButtonWrapper>
          <FetchButton
            text={"Start Quiz"}
            amount={amount}
            category={category}
            difficulty={difficulty}
            type={type}
          ></FetchButton>
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
