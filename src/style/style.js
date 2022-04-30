import styled from 'styled-components'

export const PrimaryContainer = styled.div`
    height:100vh;
    width:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction:column;
`

export const SecondaryContainer = styled.div`
    height:50%;
    width:50%;
    .heading-container{
        display:flex;
        justify-content:space-between;
    }
`

export const TopHeading = styled.p`
    margin-bottom:4px;
    color:#6c6d78;
`

export const Error = styled.p`
    margin-bottom:4px;
    color:red;
`
export const DisplayContainer = styled.div`
    width:100%;
    height:70%;
    display:flex;
    flex-direction:column;
`

export const OutboundContainer = styled.div`
    width:100%;
    height:45%;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-top-right-radius:10px;
    border-top-left-radius:10px;
`

export const DropDownContainer = styled.div`
    margin-left:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    .p{
        margin-top:1px
    }
`

export const InputContainer = styled.div`
    margin-right:20px;
    display:flex;
    flex-direction:row;
    font-size:18px;
    background-color:#fff;
    align-items:center;
    .input{
        border:30px;
        outline:none;
        height:20;
        font-size:24px;
        width:60px;
    }
`

export const Seprator = styled.div`
    width:100%;
    height:10%;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
`

export const ExchangeRateDisplay = styled.div`
    height:20px;
    width:120px;
    border-radius:10px;
    display:flex;
    border:1px solid green;
    justify-content:space-around;
    .text{
        margin:-2px;
    }
`
export const Element = styled.div`
    height:20px;
    width:20px;
`

export const Circle = styled.div`
    height:28px;
    width:28px;
    background-color:#fff;
    margin-right:-15px;
    margin-top:-10px;
    border-radius:20px;
    border:4px solid #30333d;
    background-color:#fff;
`
export const InboundContainer = styled.div`
    width:100%;
    height:45%;
    background-color:#fff;
    display:flex;
    justify-content:space-between;
    align-items:center;
    border-bottom-right-radius:10px;
    border-bottom-left-radius:10px;
    border-width:20px;
    border-color:green
`

export const Button = styled.button`
    background-color:#d42461;
    width:120px;
    border-radius:4px;
    cursor:pointer;
    height:35px;
    margin-top:10px;
    border:0px;
    color:#ffff;
    &:hover{
        background-color:#171616;
    }
`


