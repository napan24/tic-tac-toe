import React from 'react';

export default function () {
  return (
    <>
        <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" style={{color:"white"}}>Navbar</a>
          <button onClick={Clear} type="button" class="btn btn-dark">New Game</button>
        </div>
      </nav>
        <h5>
            Tic Tac Toe 
        </h5>
        <button>
            Single Player
        </button>
        <button>
            Two Player
        </button>
    </>

  )
}
