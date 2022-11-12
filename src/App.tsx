import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";
import { Tabs_Meny } from "./components/tabs_meny/Tabs_Meny";
import { useFetchData } from "./components/customHooks/useFetchData";
import { Display_Result } from "./components/display_result/Display_Result";
import { Person_List } from "./components/person_list/Person_List";

function App() {
  // STATE
  // !! Possibly don't need
  const [person, setPerson] = useState<any>();
  const [company, setCompany] = useState<any>();
  // !!

  const [allPersons, setAllPersons] = useState<any>([]);
  const [allCompanies, setAllCompanies] = useState<any>();

  // PROPS OBJECT
  const fetchProps = {
    setPerson: setPerson,
    setCompany: setCompany,
    setAllPersons: setAllPersons,
    setAllCompanies: setAllCompanies,
  };
  // CUSTOM HOOK
  const [data, loading, fetchData] = useFetchData(fetchProps);

  // RETURN
  return (
    <>
      <Header>Know Your Customer</Header>
      <Tabs_Meny />
      <InputField fetchData={fetchData}>Search</InputField>

      <Person_List allPersons={allPersons} setAllPersons={setAllPersons} />
      <Display_Result
        data={data}
        setAllPersons={setAllPersons}
        allPersons={allPersons}
      />
    </>
  );
}

export default App;
