import { DISPLAY_TABLE } from "../constants";

export const displayTable = (data) => {
    console.log("in action", data);
    return{
        type : DISPLAY_TABLE,
        data : data
    }
}