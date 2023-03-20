import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import { Category } from "open-trivia-db";

type category = {
  id: number;
  name: string;
};
type categoryAPI = category[];

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
  width: 50%;
`;

const SimpleInput = styled.input`
  width: 50%;
  font-size: 1rem;
`;

const Label = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.025vh;
  padding: 10px, 0;
`;

const Title = styled.h1`
  font-size: 4vh;
  font-weight: bolder;
  font-style: italic;
  margin-bottom: 1rem;
  padding: 1rem;
`;

const Button = styled.button`
  background: ${(props) => (props.primary ? "white" : "black")};
  color: ${(props) => (props.primary ? "black" : "whtie")};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em, 1em;
  border: 2px solid black;
  border-radius: 3px;
`;

const BASE_URL = `https://opentdb.com`;
export default function Settings() {
  const [difficulty, setDifficultly] = useState("Any");
  const [categories, setCategories] = useState<categoryAPI>([]);
  const [category, setCategory] = useState("Any");
  const [type, setType] = useState("Any");
  const [amount, setAmount] = useState(0);
  const [options, setOptions] = useState({
    amount: undefined,
    category: "",
    difficulty: "",
    type: "",
  });

  useEffect(() => {
    fetch(`${BASE_URL}/api_category.php`)
      .then((res) => res.json())
      .then((res) => setCategories(res.trivia_categories));
  }, []);

  const handleCategorySelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(e.target.value || "Any");
  };

  const handleAmountSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const handleSubmitSettings = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <form action="" method="GET" onSubmit={handleSubmitSettings}>
      <Container>
        <Title>Select the options for your quiz...</Title>
        {/* <SelectOptions value={amount} onChange={handleAmountSelect}>
          <option>{amount}</option>
          {Array.from({ length: 50 }, (_, i) => i + 1).map((n, i) => (
            <option key={i} value={n}>
              {n}
            </option>
          ))}
        </SelectOptions> */}
        <Label htmlFor="amount">How Many Questions? (Max 50) </Label>
        <SimpleInput type="number" min={1} max={50}></SimpleInput>
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
        <SelectOptions>
          <option>Easy</option>
          <option>Medium</option>
          <option>Hard</option>
        </SelectOptions>
        <Label htmlFor="type"> Type:</Label>
        <SelectOptions>
          <option>Multiple Choice</option>
          <option>True / False</option>
        </SelectOptions>
        <Button primary type="submit">
          Start Quiz
        </Button>
        <Button type="submit">Start Default Quiz</Button>
      </Container>
    </form>
  );
}
