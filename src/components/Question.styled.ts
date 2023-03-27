import styled from "styled-components";

interface TitleProps {
  size?: number;
  max?: number;
}
export const QuestionTitle = styled.h4<TitleProps>`
  color: ghostwhite;
  font-size: ${(props) => (props.size ? `${props.size}vh` : `2vh`)};
  letter-spacing: 0.5vh;
  @media only screen and (max-width: 420px) {
    font-size: unset;
  }
`;

export const QuestionOptions = styled.div<TitleProps>`
  color: ghostwhite;
  font-size: 1.75rem;
  text-align: center;
  ${({ max }) => max && `width: ${max}%`};

  @media only screen and (max-width: 420px) {
    font-size: 1.15rem;
  }
`;

export const ChoiceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const Choice = styled.button`
  width: 80%;
  font: inherit;
  background-color: var(--darkPink);
  color: ghostwhite;
  font-weight: lighter;
  border: solid 1px var(--neonBlue);
  letter-spacing: 0.025vh;
  text-align: center;
  padding: 1rem;

  &:hover,
  :focus {
    background-color: var(--neonPink);
    cursor: pointer;
    box-shadow: 0px 0px 5px var(--white);
    font-weight: bold;
  }
`;
