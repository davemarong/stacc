// IMPORT

// REACT

// MUI
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE
interface Props {
  data: any;
  setAllPersons: any;
  allPersons: any;
}
// FUNCTIONAL COMPONENT
export const Display_Result = ({ data, setAllPersons, allPersons }: Props) => {
  // STATE

  // FUNCTIONS
  const handleAddPersonToList = (id: string, data: any) => {
    const person = data.filter((item: any) => {
      return item.id === id;
    })[0];
    setAllPersons([...allPersons, person]);
  };
  // RETURN
  return (
    <Container maxWidth="md">
      <Grid container spacing={10}>
        {data.map((item: any) => {
          return (
            <Grid key={item.id} item xs={4}>
              <Card>
                <CardContent>
                  <Typography>{item.name}</Typography>
                  <Button
                    onClick={() => {
                      handleAddPersonToList(item.id, data);
                    }}
                  >
                    Add to list
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
