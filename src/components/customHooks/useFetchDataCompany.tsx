// IMPORT

// REACT
import { useState } from "react";

// MUI

// COMPONENTS

// UTILS

// DATA
import { rollerUrl, enheterUrl } from "../../constants/constants";

// LIBRARY
import axios from "axios";

// TYPE/INTERFACE

// FUNCTIONAL COMPONENT
export const useFetchDataCompany = () => {
  // STATE
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCompanyData = async (query: string) => {
    setLoading(true);
    try {
      const responseRoller = await axios.get(rollerUrl + query);
      const responseInfo = await axios.get(enheterUrl + query);
      console.log(responseInfo.data);
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

  // FUNCTIONS

  // RETURN
  return [data, loading, fetchCompanyData];
};
