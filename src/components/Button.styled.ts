import styled from "styled-components";

type ButtonProps = {
  primary?: string;
};

export const Button = styled.button<ButtonProps>`
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
