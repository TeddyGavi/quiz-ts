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
  gap: 2rem;
  margin-top: 25vh;
`;

const SelectOptions = styled.select`
  color: black;
  font-size: 1.5rem;
  scrollbar-width: thin;
  width: 50%;
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

  // console.log(amount);

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
  return (
    <form>
      <Container>
        <h1>Select the options for your quiz...</h1>
        {/* <SelectOptions value={amount} onChange={handleAmountSelect}>
          <option>{amount}</option>
          {Array.from({ length: 50 }, (_, i) => i + 1).map((n, i) => (
            <option key={i} value={n}>
              {n}
            </option>
          ))}
        </SelectOptions> */}
        <label>How Many Questions? (Max 50) </label>
        <input type="number" min={1} max={50}></input>
        <label for="category">Category:</label>
        <SelectOptions value={category} onSubmit={handleCategorySelect}>
          <option>Any</option>
          {categories &&
            categories.map((cat) => (
              <option value={cat.id} key={cat.id}>
                {cat.name}
              </option>
            ))}
        </SelectOptions>
      </Container>
    </form>
  );
}
