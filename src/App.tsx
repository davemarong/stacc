import React from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";

function App() {
  return (
    <div>
      <Header>Know Your Customer </Header>
      <InputField />
      <Button variant="text">hjkhText</Button>
    </div>
  );
}

export default App;
