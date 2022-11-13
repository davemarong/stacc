// IMPORT

// REACT

// MUI
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE
interface Props {
  personList: any;
  setPersonList: any;
}
// FUNCTIONAL COMPONENT
export const Person_List = ({ personList, setPersonList }: Props) => {
  // STATE

  // FUNCTIONS
  const handleRemovePersonFromList = (id: string) => {
    const listWithoutPerson = personList.filter((item: any) => item.id !== id);
    setPersonList([...listWithoutPerson]);
  };

  // RETURN
  return (
    // Could have reused the "display_result" comp, with some parameters, but did this as its easier to add more functionality to cards
    <Container maxWidth="sm">
      {personList.map((item: any) => {
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
