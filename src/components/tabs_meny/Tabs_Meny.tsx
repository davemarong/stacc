import React, { useState } from "react";

import { tabs_items } from "./Tabs_Items";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

export const Tabs_Meny = () => {
  // STATE
  const [value, setValue] = useState(0);

  // FUNCTIONS
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
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
