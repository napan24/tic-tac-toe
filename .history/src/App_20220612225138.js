import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './tik.css';
import { useState } from 'react';
import cross from './cross.jpeg';
/* <FontAwesomeIcon icon={faXmark} size="5x" /> */
/* <FontAwesomeIcon icon={faCircle} size="5x"/> */

// const cl=event.currentTarget.id;
// const el = document.getElementById(cl);
// el.append(a);
function App() {
  const [curr,setCurr]=useState(false);
  const handleClick = event => {
    const cl=event.currentTarget.id;
    document.getElementById(cl).style.background ="url("+cross+")";
    console.log(cl);
    console.log(curr);
    setCurr(!curr);
  };
  
  return (
    <>
      <div id="row1" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r1column1" onClick={handleClick} style={{ height: "15vw", width: "15vw" ,backgroundRepeat:"no-repeat",backgroundSize:"cover"}}></button>
        <button id="r1column2" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
        <button id="r1column3" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
      </div>
      <div id="row2" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r2column1" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
        <button id="r2column2" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
        <button id="r2column3" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
      </div>
      <div id="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r3column1" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
        <button id="r3column2" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
        <button id="r3column3" onClick={handleClick} style={{ height: "15vw", width: "15vw",backgroundRepeat:"no-repeat" }}></button>
      </div>
    </>
  );
}

export default App;
