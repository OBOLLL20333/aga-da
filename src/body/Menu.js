import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import { useEffect, useState } from "react";
import { utils } from "xlsx";

const XLSX = require("xlsx");
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));
const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function MenuExample() {
  const [workbook, setWorkbook] = useState(XLSX.utils.book_new());
  let da;
  const data = workbook.SheetNames.map((name) =>
    utils.sheet_to_json(workbook.Sheets[name])
  );
  useEffect(() => {
    (async () => {
      const wb = XLSX.read(await (await fetch("../Menu.xlsx")).arrayBuffer());
      setWorkbook(wb);
    })();
  }, []);

  return (
    <Box>
      <Box textAlign="center" py={5} fontSize="36px" fontWeight="700ф">
        Меню
      </Box>
      <Masonry columns={{ xs: 3, sm: 2 }} spacing={2}>
        {workbook.SheetNames.map(
          (name, id) =>
            data[id][0] && (
              <Item key={name}>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 700 }} aria-label="customized table">
                    <TableBody>
                      {data[id].map(
                        (n, index) =>
                          data[id][index].Name &&
                          /\W[^\(\)]/g.test(data[id][index].Name) && (
                            <StyledTableRow key={index}>
                              <StyledTableCell component="th" scope="row">
                                {data[id][index].Name}
                              </StyledTableCell>
                              <StyledTableCell align="right">
                                {name === "Комплексный"
                                  ? data[id][index].Price > 200
                                    ? (da = data[id][index].Price)
                                      ? ""
                                      : data[id][index].Price
                                    : data[id][index].Price
                                  : data[id][index].Price}
                              </StyledTableCell>
                            </StyledTableRow>
                          )
                      )}
                    </TableBody>
                    <TableHead>
                      <TableRow>
                        <StyledTableCell>{name}</StyledTableCell>
                        {name === "Комплексный" ? (
                          <StyledTableCell align="right">
                            {da} Руб
                          </StyledTableCell>
                        ) : (
                          <StyledTableCell align="right">Руб</StyledTableCell>
                        )}
                      </TableRow>
                    </TableHead>
                  </Table>
                </TableContainer>
              </Item>
            )
        )}
      </Masonry>
    </Box>
  );
}

export { MenuExample };
