import styled from "styled-components";

type ButtonProps = {
  margin?: number;
  primary?: string;
  padding?: number;
};

/**
 * @param {number} margin
 * @param {string} primary
 * @default margin is 1rem *all sides*
 * @default padding is 0.25rem 1rem
 * @description -- margin and padding are in rem!  Primary prop inverts the white and black colors
 */
export const Button = styled.button<ButtonProps>`
  background: ${(props) => (props.primary ? "white" : "black")};
  color: ${(props) => (props.primary ? "black" : "white")};
  font-size: 1rem;
  margin: ${({ margin }) => (!margin ? `1rem` : `${margin}rem`)};
  padding: ${({ padding }) =>
    !padding ? `0.25rem 1rem` : `${padding}rem ${padding}rem`};
  border: 2px solid black;
  border-radius: 3px;
  font-weight: 900;
  cursor: pointer;
  &:hover {
    color: var(--gray);
    box-shadow: 0px 0px 5px whitesmoke;
  }
`;
