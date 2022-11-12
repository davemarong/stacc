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
  setPerson: any;
  setCompany: any;
  setAllPersons: any;
  setAllCompanies: any;
}
// FUNCTIONAL COMPONENT
export const useFetchData = ({
  setPerson,
  setCompany,
  setAllPersons,
  setAllCompanies,
}: Props) => {
  // STATE
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<any>(false);

  const fetchData = async (query: string) => {
    setLoading(true);
    const response = await axios.get(pepUrl + query);
    console.log(response.data);
    setData(response.data.hits);
    setLoading(false);
  };
  // FUNCTIONS

  // RETURN
  return [data, loading, fetchData];
};
