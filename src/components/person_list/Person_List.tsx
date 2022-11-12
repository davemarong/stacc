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
  allPersons: any;
  setAllPersons: any;
}
// FUNCTIONAL COMPONENT
export const Person_List = ({ allPersons, setAllPersons }: Props) => {
  // STATE

  // FUNCTIONS
  const handleRemovePersonFromList = (id: string) => {
    const listWithoutPerson = allPersons.filter((item: any) => item.id !== id);
    setAllPersons([...listWithoutPerson]);
  };

  // RETURN
  return (
    // Could have reused the "display_result" comp, with some parameters, but did this as its easier to add more functionality to cards
    <Container maxWidth="sm">
      {allPersons.map((item: any) => {
        return (
          <Card key={item.id} style={{ margin: "20px 0" }}>
            <CardContent>
              <Typography>{item.name}</Typography>
              <Button
                onClick={() => {
                  handleRemovePersonFromList(item.id);
                }}
              >
                Remove
              </Button>
            </CardContent>
          </Card>
        );
      })}
    </Container>
  );
};
