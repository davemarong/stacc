// IMPORT

// REACT
import { ReactNode } from "react";

// MUI
import Button from "@mui/material/Button";

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE
type Props = {
  children: ReactNode;
  func?: any;
  query?: string;
};
// FUNCTIONAL COMPONENT
export const ButtonMui = ({
  children,
  func = () => console.log("optional functions"),
  query = "",
}: Props) => {
  // STATE

  // FUNCTIONS

  // RETURN
  return (
    <Button
      variant="outlined"
      color="secondary"
      onClick={() => {
        func(query);
      }}
    >
      {children}
    </Button>
  );
};
