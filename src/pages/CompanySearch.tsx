/* eslint-disable react/jsx-pascal-case */
// IMPORT

// REACT
import React, { useState, useEffect, ReactNode } from "react";

// MUI
import Container from "@mui/material/Container";

// COMPONENTS
import { Header } from "../components/header/Header";
import { InputField } from "../components/inputField/InputField";
import { Tabs_Meny } from "../components/tabs_meny/Tabs_Meny";
import { Person_List } from "../components/person_list/Person_List";
import { Split_Screen_1to3 } from "../components/split_screen_1to3/Split_Screen_1to3";
import { Display_Roller } from "../components/display_result/Display_Roller";
import { ButtonMui } from "../components/button/ButtonMui";

// CUSTOM HOOKS
import { useFetchDataCompany } from "../components/customHooks/useFetchDataCompany";

// ROUTING
import { Routes, Route } from "react-router-dom";

// DATA

// TYPE/INTERFACE
import { Person } from "../types/Types";

interface Props {
  setPersonList: (value: Person) => void;
  personList: Person;
}
// FUNCTIONAL COMPONENT
export const CompanySearch = ({ personList, setPersonList }: Props) => {
  // STATE

  // CUSTOM HOOK
  const [data, loading, fetchCompanyData] = useFetchDataCompany();

  // FUNCTIONS

  // RETURN
  return (
    <>
      <Header>PEP search on a company</Header>
      <InputField label="Search by a Company...">
        <ButtonMui func={fetchCompanyData}>Add to list</ButtonMui>
      </InputField>
      <Split_Screen_1to3>
        <Person_List personList={personList} setPersonList={setPersonList} />
        <Display_Roller
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
