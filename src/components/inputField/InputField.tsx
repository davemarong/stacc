// IMPORT

// REACT
import React, { useState, ReactNode } from "react";

// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE

// FUNCTIONAL COMPONENT
type Props = {
  children: any;
  label: string;
};

export const InputField = ({ children, label }: Props) => {
  const [userInput, setUserInput] = useState("");

  const handleUserInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };
  return (
    <Container maxWidth="sm">
      <Grid container direction="row" alignItems="center">
        <Grid item xs={10}>
          <TextField
            id="outlined-basic"
            label={label}
            variant="outlined"
            value={userInput}
            onChange={handleUserInput}
            autoFocus
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          {React.cloneElement(children, {
            query: userInput,
          })}
        </Grid>
      </Grid>
    </Container>
  );
};
