import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";
import { Tabs_Meny } from "./components/tabs_meny/Tabs_Meny";
import { useFetchData } from "./components/customHooks/useFetchData";

function App() {
  // STATE
  const [person, setPerson] = useState<any>();
  const [company, setCompany] = useState<any>();
  const [allPersons, setAllPersons] = useState<any>();
  const [allCompanies, setAllCompanies] = useState<any>();

  // CUSTOM HOOK
  const [data, loading, fetchData] = useFetchData({
    query: "erna solberg",
  });

  // RETURN
  return (
    <>
      <Header>Know Your Customer</Header>
      <Tabs_Meny />
      <InputField>Search</InputField>
    </>
  );
}

export default App;
