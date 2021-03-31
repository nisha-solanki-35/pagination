import React, { useEffect, useState } from 'react'
import cities from "./cities.json";
import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from "@material-ui/core";

const useStyles = makeStyles({
    table: {
      minWidth: 500
    },
    tableheader : {
        fontWeight : 'bolder'
    }
});  

const Pagination = () => {

    const classes = useStyles();
    const [data, setdata] = useState([])
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        setdata(cities)
    }, [])
  
    const handleChangePage = (event, newPage) => {
      console.log("new page", newPage);
      setPage(newPage);
    };
  
    const handleChangeRowsPerPage = (event) => {
        // console.log("handleChangeRowsPerPage", event.target.value);
      setRowsPerPage(event.target.value);
      setPage(0);
    };
  
    // console.log("cities", data);
    
    return (
        <TableContainer>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.tableheader}>ID</TableCell>
            <TableCell align="right" className={classes.tableheader}>Country</TableCell>
            <TableCell align="right" className={classes.tableheader}>Name</TableCell>
            <TableCell align="right" className={classes.tableheader}>State</TableCell>
            <TableCell align="right" className={classes.tableheader}>TZ</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((row, index) => (
              <TableRow key={index}>
                <TableCell align="left" >{row._id}</TableCell>
                <TableCell align="right">{row.country}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.tz}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
            <TablePagination
            rowsPerPageOptions={[5,10,25,50]}
            component="div"
            count={data.length}
            page={page}
            onChangePage={handleChangePage}
            rowsPerPage={rowsPerPage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            />
        </TableContainer>
    )
} 

export default Pagination
