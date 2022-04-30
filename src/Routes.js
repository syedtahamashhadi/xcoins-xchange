import React from 'react';
import react from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Page from './page';

const XCoinsRoutes = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Page/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default XCoinsRoutes;