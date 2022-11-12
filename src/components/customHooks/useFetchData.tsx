// IMPORT

// REACT
import { useState } from "react";

// MUI

// COMPONENTS

// UTILS

// DATA
import { pepUrl } from "../../constants/constants";

// LIBRARY
import axios from "axios";

// TYPE/INTERFACE
interface Props {
  query: string;
}
// FUNCTIONAL COMPONENT
export const useFetchData = ({ query }: Props) => {
  // STATE
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState<any>(false);

  const fetchData = async () => {
    setLoading(true);
    const response = await axios.get(pepUrl + query);
    console.log(response.data);
    setData(response.data);
    setLoading(false);
  };
  // FUNCTIONS

  // RETURN
  return [data, loading, fetchData];
};
