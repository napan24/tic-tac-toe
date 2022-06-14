import {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import './tik.css';
import { useState } from 'react';
import cross from './cross.jpeg';
import circle from './circle.png';
/* <FontAwesomeIcon icon={faXmark} size="5x" /> */
/* <FontAwesomeIcon icon={faCircle} size="5x"/> */

// const cl=event.currentTarget.id;
// const el = document.getElementById(cl);
// el.append(a);
function App() {
  const [board,setBoard]=useState([["","",""],["","",""],["","",""]]);
  const [curr,setCurr]=useState(false);
  function func(row,col){
    setBoard(prevBoard => {
      const board = [...prevBoard];
      board[row] = [...board[row]];
      board[row,col] = curr?"0":"+";
      return board;
    })
    console.log(board);
    let c=board[row][col];
    let count=0;
    let i=row;
    while(i<3){
      if(board[i][col]==c){
        count++;
      }
      i++;
    }
    count--;
    i=row;
    while(i>=0){
      if(board[i][col]==c){
        count++;
      }
      i--;
    }
    if(count==3){
      return true;
    }
    let j=col;
    count=0;
    while(j<3){
      if(blocks[row][j]==c){
        count++;
      }
      j++;
    }
    count--;
    j=col;
    while(j>=0){
      if(blocks[row][j]==c){
        count++;
      }
      j--;
    }
    if(count==3){
      return true;
    }
    return false;
  }
  const handleClick = event => {
    const cl=event.currentTarget.id;
    document.getElementById(cl).style.background =curr?"url("+cross+")":"url("+circle+")";
    document.getElementById(cl).style.backgroundSize="cover";
    document.getElementById(cl).style.backgroundRepeat="no-repeat";
    if(cl=="r1column1"){
      func(0,0);
    }
    if(cl=="r1column2"){
      func(0,1);
    }
    if(cl=="r1column3"){
      func(0,2);
    }
    if(cl=="r2column1"){
      func(1,0);
    }
    if(cl=="r2column2"){
      func(1,1);
    }
    if(cl=="r2column3"){
      func(1,2);
    }
    if(cl=="r3column1"){
      func(2,0);
    }
    if(cl=="r3column2"){
      func(2,1);
    }
    if(cl=="r3column3"){
      func(2,2);
    }
    setCurr(!curr);
  };
  
  return (
    <>
      <div id="row1" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r1column1" onClick={handleClick} style={{ height: "15vw", width: "15vw"}}></button>
        <button id="r1column2" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
        <button id="r1column3" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
      </div>
      <div id="row2" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r2column1" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
        <button id="r2column2" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
        <button id="r2column3" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
      </div>
      <div id="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r3column1" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
        <button id="r3column2" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
        <button id="r3column3" onClick={handleClick} style={{ height: "15vw", width: "15vw" }}></button>
      </div>
    </>
  );
}

export default App;
