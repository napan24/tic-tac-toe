import React from 'react';
export default function () {
  return (
    <>
        <h5 style={{fontSize:"3rem",position:"absolute",left:"45vw",color:"white",top:"5vh"}}>
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
