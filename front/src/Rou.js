import React from 'react'
import {BrowserRouter, Routes ,Route } from 'react-router-dom';
import AddPerson from './Pages/AddPerson'
import AddInterieur from './Pages/AddInterieur'
import AddFinance from './Pages/AddFinance'
import Search from './Pages/Search'
import AllPersons from './Pages/AllPersons'
import Navbar from './Components/Navbar';

import Details from './Pages/Details';

export default function Rou() {
    
    return (
     <BrowserRouter>
        <Navbar/>
        <Routes>
   
        <Route path='/' element={<Search/>} />
        <Route path='/AddPerson' element={<AddPerson/>} />
        <Route path='/AddInterieur/:Id/:cin' element={<AddInterieur/>} />
      <Route path='/AddFinance/:Id/:cin' element={<AddFinance/>} /> 
        <Route path='/All' element={<AllPersons/>} />
      
        <Route path='/Details/:cin' element={<Details/>} />
      
            {/*     <Route path='/AddPerson' exact component={AddPerson} /> */}
               {/*  <Route path='/Search' exact component={Search} /> */}
             
               </Routes> 
        </BrowserRouter>
    );
}