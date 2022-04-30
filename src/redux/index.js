import { combineReducers } from "redux"; 
import { getEchangeRateReducer } from "./reducer"; 

const appReducer = combineReducers(
    {
        getEchangeRateReducer: getEchangeRateReducer
    }
)

export const rootReducer = (state,action) =>{
    return appReducer(state,action)
}