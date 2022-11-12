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
export const Display_Roller = ({
  data,
  setAllPersons,
  allPersons,
  loading,
}: Props) => {
  // STATE

  // FUNCTIONS

  // RETURN
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
  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Company Name</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Do a PEP search</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.length === 0 && (
              <Typography align="center" style={{ marginTop: 100 }}>
                We did not find anything. Try another name
              </Typography>
            )}
            {data.map((item: any) => {
              return (
                <TableRow key={item.id}>
                  <TableCell>
                    <Typography>{item.name}</Typography>
                  </TableCell>
                  <TableCell>{item.companyName}</TableCell>
                  <TableCell>{item.countries}</TableCell>
                  <TableCell>
                    {/* Choose to stop before this functionality */}
                    <Button onClick={() => {}}>PEP Search</Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
