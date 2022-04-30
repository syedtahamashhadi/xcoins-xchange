import cogoToast from "cogo-toast";
import { GET_CONVERSION_RATE } from "./constant";

let initialState = {
    USDBal: 200,
    EURBal: 150,
    GBPBal: 10,
    isLoading:true,
    data:null,
    err:null
}

export const getEchangeRateReducer = (state=initialState,action)=>{
    switch (action.type) {
        case GET_CONVERSION_RATE.LOADING:
            return {
                ...state,
                isLoading:true
            }
        case GET_CONVERSION_RATE.SUCCESS:
            return {
                ...state,
                isLoading:false,
                err:null,
                data:action.payLoad
            }
        case GET_CONVERSION_RATE.ERROR:
            return {
                ...state,
                isLoading:false,
                err:action.error
            }
            case GET_CONVERSION_RATE.EXCHANGE:
                if(!state.data){
                    cogoToast.warn('Unable to find excahnge rate')
                    return{
                        ...state
                    }
                }
                if(action.payLoad.outbound.amount>state[action.payLoad.outbound.currency+'Bal']){
                    cogoToast.warn('Un-sufficient balance')
                    return{
                        ...state
                    }
                }else{
                    let newState = {...state}
                    newState[action.payLoad.outbound.currency+'Bal'] -= action.payLoad.outbound.amount
                    newState[action.payLoad.inbound.currency+'Bal'] += action.payLoad.inbound.amount
                    return {
                        ...newState,
                    }
                }
                
        default:
            return state;
    }
}