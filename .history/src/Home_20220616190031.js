import {useEffect} from 'react';
import './tik.css';
import Two_player from './Two_player';
import Vscomp from './Vscomp';
import "./home.css";
import { Outlet, Link } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react';
function Home() {
    useEffect(() => {
      Home();
    }, []);
    
  return (
    <>
        <h5 id="title" style={{fontSize:"8vw",position:"absolute",color:"white",top:"3vh"}}>
            Tic Tac Toe 
        </h5>
        <button type="button" class="btn btn-dark" style={{width:"50vw",height:"100vh",backgroundColor:"red",fontSize:"5vw",textDecoration:"none"}}>
        <Link to="Vs">Single Player</Link>
        </button>
        <button type="button" class="btn btn-dark" style={{width:"50vw",height:"100vh",fontSize:"5vw"}}>
        <Link to="Two">Two Player</Link>
        </button>
    </>
  );
}

export default Home;