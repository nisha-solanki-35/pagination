import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { displayTable } from '../services/actions/action';
import { useTable } from 'react-table'
import cities from "./cities.json";
import { COLUMNS } from "./ columns";
import "../assets/css/table.css";
import CustomPagination from './CustomPagination';

const PaginationReactTable = () => {

    const [numberPerPage, setnumberPerPage] = useState(10);
    const [pagination, setpagination] = useState({
        start : 0,
        end : numberPerPage
    })

    const dispatch = useDispatch();
    const state = useSelector(state => state.tableData.citiesData)

    useEffect(() => {
        dispatch(displayTable(cities));
    }, [])
    
    // console.log("state", state);

    // const columns = useMemo(() => COLUMNS, [])
    // const data = useMemo(() => state, [])

    const tableInstance = useTable({
        columns: COLUMNS,
        data : state
    })

    const handleClick = (event) => {
        setnumberPerPage(parseInt(event.target.value));
        setpagination({start : 0, end : parseInt(event.target.value)});
        // console.log("event", event.target.value);
    };

    const paginationChange = (start, end) => {
        // console.log(`in pagination Change ${start} ${end}`);
        setpagination({start : start, end : end});
    }

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = tableInstance

    return (
        <div>
            <table {...getTableProps()}>
                <thead>
                {
                    headerGroups.map((headerGroup, index )=> (
                    <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                    {
                        headerGroup.headers.map((column ,index) => (
                        <th key={index} {...column.getHeaderProps()}>
                        {
                            column.render('Header')
                        }
                        </th>
                    ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {rows.slice(pagination.start, pagination.end).map((row,index) => {
                    prepareRow(row)
                    return (
                    <tr key={index} {...row.getRowProps()}>
                        {row.cells.map((cell, index) => {
                        return <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                        })}
                    </tr>
                    )
                })}
                </tbody>
            </table>
            <CustomPagination numberPerPage={numberPerPage} handleClick={handleClick} paginationChange={paginationChange} total={state.length}></CustomPagination>
        </div>
    )
}

export default PaginationReactTable
