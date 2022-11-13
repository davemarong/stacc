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
import { useFetchDataPerson } from "../components/customHooks/useFetchDataPerson";

// ROUTING
import { Routes, Route } from "react-router-dom";

// DATA

// TYPE/INTERFACE
import { Person } from "../types/Types";
import { ButtonMui } from "../components/button/ButtonMui";

interface Props {
  setPersonList: (value: Person) => void;
  personList: Person;
}
// FUNCTIONAL COMPONENT
export const PersonSearch = ({ personList, setPersonList }: Props) => {
  // STATE

  // PROPS OBJECT

  // CUSTOM HOOK
  const [data, loading, fetchDataPerson] = useFetchDataPerson();

  // FUNCTIONS

  // RETURN
  return (
    <>
      <Header>PEP search on a person</Header>
      <InputField label="Search by a name...">
        <ButtonMui func={fetchDataPerson}>Add to list</ButtonMui>
      </InputField>
      <Split_Screen_1to3>
        <Person_List personList={personList} setPersonList={setPersonList} />
        <Display_Persons
          data={data}
          setPersonList={setPersonList}
          personList={personList}
          loading={loading}
        />
      </Split_Screen_1to3>
      ;
    </>
  );
};
