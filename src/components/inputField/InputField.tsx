import React, { useState } from "react";
import TextField from "@mui/material/TextField";

export const InputField = () => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <div>
      <TextField
        id="outlined-basic"
        label="Search for a person"
        variant="outlined"
        value={userInput}
        onChange={handleUserInput}
      />
      value: {userInput}
    </div>
  );
};
