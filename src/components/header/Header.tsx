import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const Header = ({ children }: Props) => {
  return <p>{children}</p>;
};
