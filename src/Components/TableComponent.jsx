import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import React from "react";
import { Link } from "react-router-dom";
import { ACTION, VIEW_DETAILS } from "../Utils/constatant";

const DynamicTable = ({ data, columns }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="dynamic table">
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={column.key} align={column.align || "right"}>
                {column.label}
              </TableCell>
            ))}
            <TableCell align={"right"}>{ACTION}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              {columns.map((column) => (
                <TableCell key={column.key} align={column.align || "right"}>
                  {row[column.key]}
                </TableCell>
              ))}
              <TableCell align="right">
                <Link to={`/investors/${row.firm_id}`}>{VIEW_DETAILS}</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DynamicTable;
