// IMPORT

// REACT
import { useState } from "react";

// MUI

// COMPONENTS

// UTILS

// DATA
import { pepUrl, rollerUrl, tabsValueEnum } from "../../constants/constants";

// LIBRARY
import axios from "axios";

// TYPE/INTERFACE
interface Props {
  searchType: string;
}
// FUNCTIONAL COMPONENT
export const useFetchData = ({ searchType }: Props) => {
  // STATE
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);
  let baseUrl: string;
  if (searchType === "person") baseUrl = pepUrl;
  if (searchType === "roller") baseUrl = rollerUrl;

  const fetchData = async (query: string) => {
    setLoading(true);
    const response = await axios.get(baseUrl + query);
    console.log(response.data);
    setData(response.data.hits);
    setLoading(false);
  };
  // FUNCTIONS

  // RETURN
  return [data, loading, fetchData];
};
