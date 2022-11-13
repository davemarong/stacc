// IMPORT

// REACT
import { ReactNode } from "react";

// MUI
import Typography from "@mui/material/Typography";

// INTERFACE
type Props = {
  children: ReactNode;
};

// FUNCTIONAL COMPONENT
export const Header = ({ children }: Props) => {
  // RETURN
  return (
    <Typography style={{ margin: 50 }} variant="h4" align="center">
      {children}
    </Typography>
  );
};
