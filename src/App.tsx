/* eslint-disable react/jsx-pascal-case */
// IMPORT

// REACT
import React, { useState, useEffect, ReactNode } from "react";

// MUI
import Button from "@mui/material/Button";

// COMPONENTS
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";
import { Tabs_Meny } from "./components/tabs_meny/Tabs_Meny";
import { Display_Persons } from "./components/display_result/Display_Persons";
import { Person_List } from "./components/person_list/Person_List";
import { Split_Screen_1to3 } from "./components/split_screen_1to3/Split_Screen_1to3";
import { Display_Roller } from "./components/display_result/Display_Roller";

// CUSTOM HOOKS
import { useFetchData } from "./components/customHooks/useFetchData";

// UTILS

// DATA

// TYPE/INTERFACE
import { Person } from "./types/Types";

// FUNCTIONAL COMPONENT
function App() {
  // STATE
  const [searchType, setSearchType] = useState<string>("person");
  const [allPersons, setAllPersons] = useState<Person | []>([]);

  // PROPS OBJECT

  // CUSTOM HOOK
  const [data, loading, fetchData] = useFetchData({ searchType: searchType });

  let DisplayResult: any;
  // These two components are very similar. Create a more reusable comp? Or props?
  if (searchType === "person") {
    DisplayResult = Display_Persons;
  } else if (searchType === "roller") {
    DisplayResult = Display_Roller;
  }
  // RETURN
  return (
    <>
      <Header>Know Your Customer</Header>
      <Tabs_Meny setSearchType={setSearchType} searchType={searchType} />
      <InputField fetchData={fetchData}>Search</InputField>
      <Split_Screen_1to3>
        <Person_List allPersons={allPersons} setAllPersons={setAllPersons} />
        <DisplayResult
          data={data}
          setAllPersons={setAllPersons}
          allPersons={allPersons}
          loading={loading}
        />
      </Split_Screen_1to3>
    </>
  );
}

export default App;
