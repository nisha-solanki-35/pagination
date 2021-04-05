import {DISPLAY_TABLE} from '../constants'

const intialState = {
    citiesData : []
}

export default function tableData(state = intialState, action) {
    switch(action.type){
        case DISPLAY_TABLE :
            console.log("in reducer",action.data); 
            return{
                ...state,
                citiesData : action.data
            }
        default:
            return state
    }
}
