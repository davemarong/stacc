// IMPORT
// REACT
import { ReactNode } from "react";

// INTERFACE
type Props = {
  children: ReactNode;
};

// FUNCTIONAL COMPONENT
export const Header = ({ children }: Props) => {
  // RETURN
  return <p>{children}</p>;
};
