import { Container } from "@mui/material";
import React from "react";
import CardList from "./components/CardList";

const App: React.FC = () => {
  return (
    <Container maxWidth="md">
      <CardList />
    </Container>
  );
};

export default App;
