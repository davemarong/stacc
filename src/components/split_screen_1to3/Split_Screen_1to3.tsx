// IMPORT

// REACT

// MUI
import Grid from "@mui/material/Grid";

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE
interface Props {
  children: any;
}
// FUNCTIONAL COMPONENT
export const Split_Screen_1to3 = ({ children }: Props) => {
  // STATE

  // FUNCTIONS
  const [leftChild, rightChild] = children;

  // RETURN
  return (
    <Grid container>
      <Grid item xs={3}>
        {leftChild}
      </Grid>
      <Grid item xs={9}>
        {rightChild}
      </Grid>
    </Grid>
  );
};
