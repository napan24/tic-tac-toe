import {useEffect} from 'react';
import './tik.css';
import Home from './Home';
import Two_player from './Two_player';
import Vscomp from './Vscomp';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="Vs" element={<Vscomp />} />
            <Route path="Two" element={<Two_player />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;