import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Protection from './routes/Protection'
import Nube from './routes/Nube'
import ContactPage from './routes/ContactPage'
import Register from './routes/Register';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/proteccion' element={<Protection/>} />
      <Route path='/nube' element={<Nube/>} />
      <Route path='/contactPage' element={<ContactPage/>} />
      <Route path='/register' element={<Register/>} />
    </Routes>
  </BrowserRouter>
);