import { ChakraProvider, Container } from "@chakra-ui/react";
import React from "react";
import CardList from "./components/CardList";

const App: React.FC = () => {
  return (
    <ChakraProvider>
      <Container maxW="container.md">
        <CardList />
      </Container>
    </ChakraProvider>
  );
};

export default App;
