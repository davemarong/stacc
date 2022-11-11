import React from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";

function App() {
  return (
    <>
      <Header>Know Your Customer</Header>
      <InputField>Find a person</InputField>
      <InputField>Find a company</InputField>
    </>
  );
}

export default App;
