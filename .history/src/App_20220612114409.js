import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './tik.css';
import { useState } from 'react';
/* <FontAwesomeIcon icon={faXmark} size="5x" /> */
/* <FontAwesomeIcon icon={faCircle} size="5x"/> */
function App() {
  const [curr,setCurr]=useState(false);
  return (
    <>
      <div className="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
        <button className="column" style={{ height: "15vw", width: "15vw" }}></button>
      </div>
    </>
  );
}

export default App;
