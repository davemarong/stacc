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

// ROUTING
import { Routes, Route } from "react-router-dom";

// DATA

// TYPE/INTERFACE
import { Person } from "./types/Types";
import { PersonSearch } from "./pages/PersonSearch";
import { CompanySearch } from "./pages/CompanySearch";

// FUNCTIONAL COMPONENT
function App() {
  // STATE
  const [searchType, setSearchType] = useState<string>("person");
  const [allPersons, setAllPersons] = useState<Person | []>([]);

  // PROPS OBJECT
  const RouteProps = {
    searchType: searchType,
    setSearchType: setSearchType,
    allPersons: allPersons,
    setAllPersons: setAllPersons,
  };
  // RETURN
  return (
    <>
      <Tabs_Meny setSearchType={setSearchType} searchType={searchType} />
      <Routes>
        <Route
          path="/PersonSearch"
          element={<PersonSearch {...RouteProps} />}
        />
        <Route
          path="/CompanySearch"
          element={<CompanySearch {...RouteProps} />}
        />
      </Routes>
    </>
  );
}

export default App;
