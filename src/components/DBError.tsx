import React from "react";
import { reset } from "../features/questionIndex/indexSlice";
import ActionButton from "./ActionButton";
import { Container, Title } from "./Settings.styled";

export default function DBError() {
  return (
    <Container>
      <Title textAlign="center">
        Open DB returned no results...A TypeScript error led me here...
      </Title>
      <ActionButton text="Try Again" action={reset}></ActionButton>
    </Container>
  );
}
