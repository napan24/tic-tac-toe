import React from 'react';
import "./home.css"
export default function () {
  return (
    <>
        <h5 id="title" style={{fontSize:"5rem",position:"absolute",color:"white",top:"3vh"}}>
            Tic Tac Toe 
        </h5>
        <button type="button" class="btn btn-dark" style={{width:"50vw",height:"100vh",backgroundColor:"red",fontSize:"4rem"}}>
            Single Player
        </button>
        <button type="button" class="btn btn-dark" style={{width:"50vw",height:"100vh",fontSize:"4rem"}}>
            Two Player
        </button>
    </>

  )
}
