// IMPORT

// REACT
import { useState } from "react";

// MUI

// COMPONENTS

// UTILS

// DATA
import {
  pepUrl,
  rollerUrl,
  enheterUrl,
  tabsValueEnum,
} from "../../constants/constants";

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

  const fetchCompanyData = async (query: string) => {
    setLoading(true);
    try {
      const responseRoller = await axios.get(rollerUrl + query);
      const responseInfo = await axios.get(enheterUrl + query);
      console.log(responseInfo.data.forretningsadresse.landkode);
      // A org number can return multiple items, then this wil not work as intended
      const personsFromCompany = responseRoller.data[0].roller.map(
        (item: any) => {
          return {
            name: `${item.person.navn.fornavn} ${item.person.navn.etternavn}`,
            companyName: responseInfo.data.navn,
            countries: responseInfo.data.forretningsadresse.landkode,
          };
        }
      );
      console.log(personsFromCompany);
      setData(personsFromCompany);
      setLoading(false);
    } catch (error: any) {
      console.log(error);
      // Set data to show a error message
      setLoading(false);
    }
  };
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
  const fetchData = async (query: string) => {
    if (searchType === "person") {
      fetchPersonData(query);
    } else if (searchType === "roller") {
      fetchCompanyData(query);
    }
  };
  // FUNCTIONS

  // RETURN
  return [data, loading, fetchData];
};
