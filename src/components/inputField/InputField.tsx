import React, { useState, ReactNode } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

type Props = {
  children: ReactNode;
  fetchData: (query: string) => {};
};

export const InputField = ({ children, fetchData }: Props) => {
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
            label={children}
            variant="outlined"
            value={userInput}
            onChange={handleUserInput}
            autoFocus
            fullWidth
          />
        </Grid>
        <Grid item xs={2}>
          <Button
            variant="outlined"
            onClick={() => {
              fetchData(userInput);
            }}
          >
            Search
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
