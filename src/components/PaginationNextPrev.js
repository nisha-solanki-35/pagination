import { makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import cities from "./cities.json";
import ReactPaginate from 'react-paginate';
import "./paginationNextPrev.css"

const useStyles = makeStyles({
    table: {
        minWidth: 500
    },
    tableheader : {
        fontWeight : 'bolder'
    }
});

const PaginationNextPrev = () => {
    const classes = useStyles();
    const [data, setdata] = useState([]);
    const [startNumber, setstartNumber] = useState(0)
    const [dataPerPage, setdataPerPage] = useState()

    const pageVisited = startNumber * dataPerPage
    const displayData = data.slice(pageVisited, pageVisited + dataPerPage)    
    const pageCount = Math.ceil(data.length / dataPerPage);

    useEffect(() => {
        setdata(cities),
        setdataPerPage(10);
    }, [])

    const handlePageChange = ({page,type,selected}) => {
        console.log("selected ", type, page);
        setstartNumber(selected)
    }

    // console.log("length",data);

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
                {displayData
                    .map((row, index) => (
                    <TableRow key={index}>
                        <TableCell align="left">{row._id}</TableCell>
                        <TableCell align="right">{row.country}</TableCell>
                        <TableCell align="right">{row.name}</TableCell>
                        <TableCell align="right">{row.state}</TableCell>
                        <TableCell align="right">{row.tz}</TableCell>
                    </TableRow>
                    ))}
                </TableBody>
            </Table>
        <ReactPaginate 
        previousLabel="Previous"
        nextLabel="Next"
        pageCount={pageCount}
        onPageChange={handlePageChange}
        containerClassName="buttons"
        previousLinkClassName="prevbutton"
        nextLinkClassName="nextbutton"
        disabledClassName="disabledbutton"
        activeClassName="activebutton"
        />    
        </TableContainer>
    )
}

export default PaginationNextPrev
