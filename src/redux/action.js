import { GET_CONVERSION_RATE } from './constant'
import { exchangeApi } from '../axios.config'
import cogoToast from 'cogo-toast'

const getEchangeRate = (data) => async (dispatch) =>{
    dispatch({
        type: GET_CONVERSION_RATE.LOADING
    })
    try {
        console.log('state >>>> ')
        let apiCall = await exchangeApi.get(`/latest?symbols=GBP,EUR,USD&base=${data.baseCurrency}`)
        if(apiCall.status==200){
            dispatch({
                type: GET_CONVERSION_RATE.SUCCESS,
                payLoad: {
                    base: apiCall.data.base,
                    // rates: apiCall.data.rates
                    rates:{
                        "EUR":apiCall?.data?.rates["EUR"].toFixed(4),
                        "USD":apiCall?.data?.rates["USD"].toFixed(4),
                        "GBP":apiCall?.data?.rates["GBP"].toFixed(4)
                    }
                }
            })
        }
    } catch (error) {
        cogoToast.error('Unable to fetch exchange rate')
        dispatch({
            type:GET_CONVERSION_RATE.ERROR,
            error: "Unable to fetch exchange rate !" 
        })   
    }
}

export default getEchangeRate;