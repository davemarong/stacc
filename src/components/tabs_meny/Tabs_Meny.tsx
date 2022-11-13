import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import { tabs_items } from "./Tabs_Items";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { tabsValueEnum } from "../../constants/constants";

export const Tabs_Meny = () => {
  // STATE
  const [value, setValue] = useState(0);

  // ROUTING
  let navigate = useNavigate();

  // FUNCTIONS
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === tabsValueEnum.Person) {
      navigate("/PersonSearch");
    } else if (newValue === tabsValueEnum.Roller) {
      navigate("/CompanySearch");
    }
  };
  // RETURN
  return (
    <Tabs value={value} onChange={handleChange}>
      {tabs_items.map((item: any) => {
        return <Tab label={item.label} key={item.id} />;
      })}
    </Tabs>
  );
};
