import {useEffect, useRef} from 'react';
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
  useEffect(() => {
    console.log('className 👉️', ref.current.className);

    // 👇️ check if element contains class
    if (ref.current.classList.contains('my-class')) {
      console.log('Element contains class');
    } else {
      console.log('Element does NOT contain class');
    }
  }, []);
  const ref = useRef(null);
  const [curr,setCurr]=useState(false);
  function func = event =>{
    console.log(event.currentTarget.className);
    setCurr(!curr);
    console.log(curr);
  }
  return (
    <>
      <div className="row1" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button ref={ref} className="r1column1" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
        <button className="r1column2" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
        <button className="r1column3" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
      </div>
      <div className="row2" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button className="r2column1" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
        <button className="r2column2" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
        <button className="r2column3" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
      </div>
      <div className="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button className="r3column1" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
        <button className="r3column2" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
        <button className="r3column3" onClick={func} style={{ height: "15vw", width: "15vw" }}></button>
      </div>
    </>
  );
}

export default App;
