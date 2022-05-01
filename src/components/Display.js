import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import getEchangeRate from '../redux/action'
import { GET_CONVERSION_RATE } from '../redux/constant'
import { Button, 
        Circle,
        DisplayContainer, 
        DropDownContainer, 
        ExchangeRateDisplay, 
        InboundContainer, 
        InputContainer, 
        OutboundContainer, 
        Seprator,
        Element } from '../style/style'

const Display = () =>{

    const dispatch = useDispatch()
    const exchangeRateState = useSelector(state=>state.getEchangeRateReducer)

    const { USDBal, EURBal, GBPBal } = exchangeRateState
    const [outbound,setOutbound] = React.useState({currency:'USD',amount:0})
    const [inbound,setInbound] = React.useState({currency:'EUR',amount:0})

    React.useEffect(()=>{
        dispatch(getEchangeRate({baseCurrency:outbound.currency}))
    },[])

    React.useEffect(()=>{
        if(exchangeRateState.data?.rates){
            let rate = (exchangeRateState.data.rates[outbound.currency]*outbound.amount)*exchangeRateState.data.rates[inbound.currency]
            setInbound({...inbound,amount:rate})
        }
    },[exchangeRateState.data])

    React.useEffect(()=>{
        setOutbound({...outbound,amount:0})
        setInbound({...inbound,amount:0})
    },[USDBal,EURBal,GBPBal])

    const handleOutBoundDropDown=(e)=>{
        setOutbound({...outbound,currency:e.target.value})
        dispatch(getEchangeRate({baseCurrency:e.target.value}))
    }

    const handleInBoundDropDown=(e)=>{
        if(exchangeRateState?.data?.rates){
            let rate = exchangeRateState.data.rates[outbound.currency]*(exchangeRateState.data.rates[e.target.value]*outbound.amount)
            setInbound({currency:e.target.value,amount:rate})
        }else{
            setInbound({...inbound,currency:e.target.value})
        }
    }

    const handleInboundAmountChange = (e) =>{
        setInbound({...inbound,amount:e.target.value})
        if(exchangeRateState?.data?.rates){
            let rate = exchangeRateState.data.rates[outbound.currency]*(exchangeRateState.data.rates[inbound.currency]*e.target.value)
            setOutbound({...outbound,amount:rate})
        }
    }

    const handleOutboundAmountChange = (e) =>{
        setOutbound({...outbound,amount:e.target.value})
        if(exchangeRateState?.data?.rates){
            let rate = (exchangeRateState.data.rates[outbound.currency]*e.target.value)*exchangeRateState.data.rates[inbound.currency]
            setInbound({...inbound,amount:rate})
        }
    }
    return(
        <DisplayContainer>
            <OutboundContainer>
                <DropDownContainer>
                    <form >
                        <select name="currency" id="currency" value={outbound.currency} onChange={handleOutBoundDropDown}>
                            <option value="USD">USD </option>
                            <option value="EUR">EUR </option>
                            <option value="GBP">GBP</option>
                        </select>
                    </form>
                    
                    <p> 
                        Balance: {exchangeRateState[outbound.currency+'Bal']?.toFixed(2)}
                    </p>
                </DropDownContainer>
                <InputContainer>
                    <p>-</p>
                    <input 
                        type={'text'} 
                        value={outbound.amount}
                        onChange={handleOutboundAmountChange}
                        className='input' 
                    />
                </InputContainer>
            </OutboundContainer>
            <Seprator>
                <Element />
                <ExchangeRateDisplay>
                    <p className='text'>
                        {
                            outbound.currency=="USD" && "$" ||
                            outbound.currency=="EUR" && "€" ||
                            outbound.currency=="GBP" && "£"
                        }
                        1
                    </p>
                    <p className='text'>=</p>
                    <p className='text'>
                        {
                            inbound.currency=="USD" && "$" ||
                            inbound.currency=="EUR" && "€" ||
                            inbound.currency=="GBP" && "£"
                        }
                        {exchangeRateState?.data?.rates[inbound.currency]}
                    </p>
                </ExchangeRateDisplay>
                <Circle/>
            </Seprator>
            <InboundContainer>
                <DropDownContainer>
                    <form >
                        <select name="currency" id="currency" value={inbound.currency} onChange={handleInBoundDropDown}>
                            <option value="USD">USD </option>
                            <option value="EUR">EUR </option>
                            <option value="GBP">GBP</option>
                        </select>
                    </form>
                    <p>
                       Balance: {exchangeRateState[inbound.currency+'Bal']?.toFixed(2)}
                    </p>
                </DropDownContainer>
                <InputContainer>
                    <p>+</p>
                    <input 
                        type={'text'} 
                        value={inbound.amount}
                        onChange={handleInboundAmountChange}
                        className='input' 
                    />
                </InputContainer>
            </InboundContainer>
            <Button
                onClick={()=>dispatch(
                    {
                        type:GET_CONVERSION_RATE.EXCHANGE,
                        payLoad:{inbound:inbound,outbound:outbound}
                    }
                )}
            >
                Exchange
            </Button>
        </DisplayContainer>
    )
}

export default Display;