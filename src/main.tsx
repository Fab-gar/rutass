import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx';
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Invoices from './rutes/Invoices.jsx';
import Expenses from './rutes/Expenses.jsx';


ReactDOM.createRoot(document.getElementById('root')!).render(

   <React.StrictMode>
    <BrowserRouter>
   <Routes>
    <Route path='/'element={<App/>}>
        <Route path='expenses' element={<Expenses/>} />
        <Route path='invoices' element={<Invoices/>} />
     </Route>
   </Routes>
  </BrowserRouter>
  </React.StrictMode>
);
