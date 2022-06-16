import React from 'react';

export default function () {
  return (
    <>
        <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" style={{color:"white"}}>Navbar</a>
        </div>
      </nav>
        <h5 style={{textAlign:"center",fontSize:"5rem"}}>
            Tic Tac Toe 
        </h5>
        <button type="button" class="btn btn-dark">
            Single Player
        </button>
        <button type="button" class="btn btn-dark">
            Two Player
        </button>
    </>

  )
}
