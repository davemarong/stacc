// IMPORT

// REACT

// MUI
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";

// COMPONENTS

// UTILS

// DATA

// TYPE/INTERFACE
import {
  Person,
  PersonObject,
  PersonsFromCompanyObject,
} from "../../types/Types";

interface Props {
  data: Person;
  setPersonList: (value: Person) => void;
  personList: Person;
  loading: boolean;
}
// FUNCTIONAL COMPONENT
export const Display_Persons = ({
  data,
  setPersonList,
  personList,
  loading,
}: Props) => {
  // STATE

  // FUNCTIONS
  // Could have used index instead, faster but could be a problem in the future
  const handleAddPersonToList = (id: string, data: Person) => {
    const person = data.filter((item: PersonObject) => item.id === id)[0];
    // check if person exists
    setPersonList([...personList, person]);
  };
  if (loading) {
    return (
      <Container maxWidth="sm">
        <CircularProgress
          style={{ marginTop: 150 }}
          size={100}
          color="secondary"
        />
      </Container>
    );
  }
  // RETURN
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Score</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>Add to list</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.length === 0 && (
            <Typography align="center" style={{ marginTop: 100 }}>
              We did not find anything. Try another name
            </Typography>
          )}
          {data.map((item: PersonObject) => {
            return (
              <TableRow key={item.id}>
                <TableCell>
                  <Typography>{item.name}</Typography>
                </TableCell>
                <TableCell>{item.score}</TableCell>
                <TableCell>{item.countries}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => {
                      handleAddPersonToList(item.id, data);
                    }}
                  >
                    Add to list
                  </Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
