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
interface Props {
  data: any;
  setAllPersons: any;
  allPersons: any;
  loading: boolean;
}
// FUNCTIONAL COMPONENT
export const Display_Result = ({
  data,
  setAllPersons,
  allPersons,
  loading,
}: Props) => {
  // STATE

  // FUNCTIONS
  // Could have used index instead, faster but could be a problem in the future
  const handleAddPersonToList = (id: string, data: any) => {
    const person = data.filter((item: any) => item.id === id)[0];
    // check if person exists
    setAllPersons([...allPersons, person]);
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
          {data.map((item: any) => {
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
