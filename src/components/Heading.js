import React from 'react'
import { useSelector } from 'react-redux';
import { TopHeading, Error } from '../style/style';

const Heading = ()=>{

    const exchangeRateState = useSelector(state=>state.getEchangeRateReducer)

    return(
        <div className='heading-container'>
            <TopHeading>Xcoins Currency Exchange </TopHeading>
            <Error>{exchangeRateState.err || ''}</Error>
        </div>
    )
}

export default Heading;