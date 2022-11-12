import React, { useState, ReactNode } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Props = {
  children: ReactNode;
};

export const InputField = ({ children }: Props) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  const handleSearch = () => {};
  return (
    <>
      <TextField
        id="outlined-basic"
        label={children}
        variant="outlined"
        value={userInput}
        onChange={handleUserInput}
      />
      <Button onClick={handleSearch}>Search</Button>
    </>
  );
};
