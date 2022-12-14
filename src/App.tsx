/* eslint-disable react/jsx-pascal-case */
// IMPORT

// REACT
import React, { useState } from "react";

// MUI

// COMPONENTS
import { Tabs_Meny } from "./components/tabs_meny/Tabs_Meny";
import { PersonSearch } from "./pages/PersonSearch";
import { CompanySearch } from "./pages/CompanySearch";

// CUSTOM HOOKS

// ROUTING
import { Routes, Route, Navigate } from "react-router-dom";

// DATA

// TYPE/INTERFACE
import { Person } from "./types/Types";

// FUNCTIONAL COMPONENT
function App() {
  // STATE
  const [personList, setPersonList] = useState<Person | []>([]);

  // PROPS OBJECT
  const RouteProps = {
    personList: personList,
    setPersonList: setPersonList,
  };
  // RETURN
  return (
    <>
      <Tabs_Meny />
      <Routes>
        <Route
          path="/PersonSearch"
          element={<PersonSearch {...RouteProps} />}
        />
        <Route
          path="/CompanySearch"
          element={<CompanySearch {...RouteProps} />}
        />
        <Route path="*" element={<Navigate to="/PersonSearch" replace />} />
      </Routes>
    </>
  );
}

export default App;
