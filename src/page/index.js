import React from "react";
import Display from "../components/Display";
import Heading from "../components/Heading";
import { PrimaryContainer, SecondaryContainer } from "../style/style";


const Page = ()=>{

    React.useEffect(()=>{
        document.body.style = 'background: #30333d;';
    },[])

    return(
        <PrimaryContainer>
            <SecondaryContainer>
                <Heading />
                <Display />
            </SecondaryContainer>
        </PrimaryContainer>
    )
}

export default Page;