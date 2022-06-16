import React from 'react';
import "./home.css";
import { Outlet, Link } from "react-router-dom";
export default function () {
  return (
    <>
        <h5 id="title" style={{fontSize:"8vw",position:"absolute",color:"white",top:"3vh"}}>
            Tic Tac Toe 
        </h5>
        <button type="button" class="btn btn-dark" style={{width:"50vw",height:"100vh",backgroundColor:"red",fontSize:"5vw"}}>
        <Link to="/Vs">Single Player</Link>
        </button>
        <button type="button" class="btn btn-dark" style={{width:"50vw",height:"100vh",fontSize:"5vw"}}>
            <Link to="/Two">Two Player</Link>
        </button>
    </>

  )
}
