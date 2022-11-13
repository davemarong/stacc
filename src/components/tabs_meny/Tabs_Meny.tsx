import React, { useState } from "react";

import { tabs_items } from "./Tabs_Items";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { pepUrl, rollerUrl, tabsValueEnum } from "../../constants/constants";

interface Props {
  setSearchType: (value: string) => void;
  searchType: string;
}
export const Tabs_Meny = ({ setSearchType, searchType }: Props) => {
  // STATE
  const [value, setValue] = useState(0);

  // FUNCTIONS
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    if (newValue === tabsValueEnum.Person) {
      setSearchType("person");
    } else if (newValue === tabsValueEnum.Roller) {
      setSearchType("roller");
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
