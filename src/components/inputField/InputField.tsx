import React, { useState, ReactNode } from "react";
import TextField from "@mui/material/TextField";

type Props = {
  children: ReactNode;
};

export const InputField = ({ children }: Props) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label={children}
        variant="outlined"
        value={userInput}
        onChange={handleUserInput}
      />
      value: {userInput}
    </div>
  );
};
