import styled from "styled-components";

interface TitleProps {
  textAlign?: string;
}

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 80%;
  @media only screen and (max-width: 420px) {
    width: 100%;
  }
`;

export const SelectOptions = styled.select`
  color: black;
  font-size: 1rem;
  scrollbar-width: thin;
  width: 80%;
  height: 2rem;
  padding: 5px;
`;

export const SimpleInput = styled.input`
  width: 80%;
  font-size: 1rem;
  height: 2rem;
  padding: 5px;
`;

export const Label = styled.label`
  font-size: 1.25rem;
  font-weight: bold;
  letter-spacing: 0.25vh;
  padding: 10px, 0;
  color: antiquewhite;
`;

export const Title = styled.h1<TitleProps>`
  color: ghostwhite;
  font-size: 4vh;
  font-weight: bolder;
  font-style: italic;
  margin-bottom: 1rem;
  padding: 1rem;
  ${({ textAlign }) => textAlign && `text-align: center;`}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-evenly;
`;
