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
  func: (value: string) => void;
  query?: string;
};
// FUNCTIONAL COMPONENT
export const ButtonMui = ({ children, func, query = "" }: Props) => {
  // STATE

  // FUNCTIONS

  // RETURN
  return (
    <Button
      variant="outlined"
      onClick={() => {
        func(query);
      }}
    >
      {children}
    </Button>
  );
};
