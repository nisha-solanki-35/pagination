import { Button, makeStyles, MenuItem, Select } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';

const useStyles = makeStyles((theme) => ({
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
}));

const CustomPagination = ({numberPerPage, handleClick, paginationChange, total}) => {
    const classes = useStyles();
    const [counter, setcounter] = useState(1);

    useEffect(() => {
        // console.log('number per page', numberPerPage);
        const value = numberPerPage * counter;
        // console.log("counter", counter);
        // console.log(`start : ${value-numberPerPage} end : ${value}`);
        paginationChange((value-numberPerPage), value)
    }, [counter])

    const onButtonClick = (btn) => {
        if(btn === "prev"){
            if(counter === 1){
                setcounter(1);
            }
            else{
                setcounter(counter-1);
            }
        }
        else if(btn === "next"){
            const pageCount = Math.ceil(total / numberPerPage);
            // console.log("pagecount", pageCount);
            if(pageCount === counter){
                setcounter(counter);
            }
            else{
                setcounter(counter+1);
            }
        }
    }

    return (
        <div>
        <Select
            value={numberPerPage}
            onClick={handleClick}
            className={classes.selectEmpty}
            inputProps={{ 'aria-label': 'Without label' }}
        >
            <MenuItem value="10">10</MenuItem>
            <MenuItem value="25">25</MenuItem>
            <MenuItem value="50">50</MenuItem>
        </Select>
        <Button variant="contained" onClick={()=> onButtonClick("prev")} >Previous</Button>
        <Button variant="contained" onClick={()=> onButtonClick("next")} >Next</Button>
        </div>
    )
}

CustomPagination.propTypes = {
    numberPerPage : PropTypes.number,
    handleClick : PropTypes.func,
    paginationChange : PropTypes.func,
    total : PropTypes.number
}

export default CustomPagination
