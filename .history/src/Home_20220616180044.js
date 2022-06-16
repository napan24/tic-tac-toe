import React from 'react';

export default function () {
  return (
    <>
        <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" style={{color:"white"}}>Navbar</a>
        </div>
      </nav>
        <h5 style={{textAlign:"center",fontSize:"3rem"}}>
            Tic Tac Toe 
        </h5>
        <button type="button" class="btn btn-dark" style={{width:"50vw"}}>
            Single Player
        </button>
        <button type="button" class="btn btn-dark" style={{width:"50vw"}}>
            Two Player
        </button>
    </>

  )
}
