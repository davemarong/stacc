/* eslint-disable react/jsx-pascal-case */
// IMPORT

// REACT
import React, { useState, useEffect, ReactNode } from "react";

// MUI
import Button from "@mui/material/Button";

// COMPONENTS
import { Header } from "../components/header/Header";
import { InputField } from "../components/inputField/InputField";
import { Tabs_Meny } from "../components/tabs_meny/Tabs_Meny";
import { Display_Persons } from "../components/display_result/Display_Persons";
import { Person_List } from "../components/person_list/Person_List";
import { Split_Screen_1to3 } from "../components/split_screen_1to3/Split_Screen_1to3";

// CUSTOM HOOKS
import { useFetchData } from "../components/customHooks/useFetchData";

// ROUTING
import { Routes, Route } from "react-router-dom";

// DATA

// TYPE/INTERFACE
import { Person } from "../types/Types";

interface Props {
  searchType: string;
  setAllPersons: (value: Person) => void;
  allPersons: Person;
  setSearchType: (value: string) => void;
}
// FUNCTIONAL COMPONENT
export const PersonSearch = ({
  searchType,
  setSearchType,
  allPersons,
  setAllPersons,
}: Props) => {
  // STATE
  // const [searchType, setSearchType] = useState<string>("person");
  // const [allPersons, setAllPersons] = useState<Person | []>([]);

  // PROPS OBJECT

  // CUSTOM HOOK
  const [data, loading, fetchData] = useFetchData({ searchType: searchType });

  // FUNCTIONS

  // RETURN
  return (
    <>
      <Header>PEP search on a person</Header>
      <InputField fetchData={fetchData}>Search</InputField>
      <Split_Screen_1to3>
        <Person_List allPersons={allPersons} setAllPersons={setAllPersons} />
        <Display_Persons
          data={data}
          setAllPersons={setAllPersons}
          allPersons={allPersons}
          loading={loading}
        />
      </Split_Screen_1to3>
      ;
    </>
  );
};
