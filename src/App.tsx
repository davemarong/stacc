/* eslint-disable react/jsx-pascal-case */
import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Header } from "./components/header/Header";
import { InputField } from "./components/inputField/InputField";
import { Tabs_Meny } from "./components/tabs_meny/Tabs_Meny";
import { useFetchData } from "./components/customHooks/useFetchData";
import { Display_Persons } from "./components/display_result/Display_Persons";
import { Person_List } from "./components/person_list/Person_List";
import { Split_Screen_1to3 } from "./components/split_screen_1to3/Split_Screen_1to3";
import { Display_Roller } from "./components/display_result/Display_Roller";

function App() {
  // STATE

  const [searchType, setSearchType] = useState<string>("person");
  const [allPersons, setAllPersons] = useState<any>([]);

  // PROPS OBJECT

  // CUSTOM HOOK
  const [data, loading, fetchData] = useFetchData({ searchType: searchType });

  let DisplayResult: any;
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
        {/* <Display_Persons
          data={data}
          setAllPersons={setAllPersons}
          allPersons={allPersons}
          loading={loading}
        /> */}
      </Split_Screen_1to3>
    </>
  );
}

export default App;
