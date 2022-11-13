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
// FUNCTIONAL COMPONENT
export const useFetchDataPerson = () => {
  // STATE
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchPersonData = async (query: string) => {
    setLoading(true);
    try {
      const response = await axios.get(pepUrl + query);
      console.log(response.data);
      setData(response.data.hits);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      // Set data to show a error message
      setLoading(false);
    }
  };

  // FUNCTIONS

  // RETURN
  return [data, loading, fetchPersonData];
};
