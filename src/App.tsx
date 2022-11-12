import React from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";
import { Tabs_Meny } from "./components/tabs_meny/Tabs_Meny";

function App() {
  return (
    <>
      <Header>Know Your Customer</Header>
      <Tabs_Meny />
      <InputField>Search</InputField>
    </>
  );
}

export default App;
