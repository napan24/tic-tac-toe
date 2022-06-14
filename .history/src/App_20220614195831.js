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
  const [board,setBoard]=useState([[" "," "," "],[" "," "," "],[" "," "," "]]);
  const [curr,setCurr]=useState(false);
  const [c,setC]=useState(null);
  const [row,setRow]=useState(0);
  const [col,setCol]=useState(0);
  const [win,setWin]=useState(false);
  const [winner,setWinner]=useState("");
  function update(r,c){
    setBoard((prevstate)=>{
      let newBoard=[...prevstate];
      newBoard[r][c]=curr?"/":"+";
      return newBoard;
    });
    setRow(r);
    setCol(c);
  }
  useEffect(() => {
    func();
  }, [board])
  useEffect(() => {
    if(win==true){
      document.getElementById("win").style.display="inline";
    }
  }, [win]);

  function func(){
    if(board[row][col]===" "){
      return;
    }
    let count=0;
    let i=row;
    while(i<3){
      if(board[i][col]==board[row][col]){
        count++;
      }
      i++;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
    }
    count--;
    i=row;
    while(i>=0){
      if(board[i][col]==board[row][col]){
        count++;
      }
      i--;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
    }
    let j=col;
    count=0;
    while(j<3){
      if(board[row][j]==board[row][col]){
        count++;
      }
      j++;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
    }
    count--;
    j=col;
    while(j>=0){
      if(board[row][j]==board[row][col]){
        count++;
      }
      j--;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
    }
  }
  const handleClick = event => {
    if(win==true){
      return;
    }
    const cl=event.currentTarget.id;
    document.getElementById(cl).style.background =curr?"url("+cross+")":"url("+circle+")";
    document.getElementById(cl).style.backgroundSize="cover";
    document.getElementById(cl).style.backgroundRepeat="no-repeat";
    let a;
    if(cl=="r1column1"){
      update(0,0);
    }
    if(cl=="r1column2"){
      update(0,1);
    }
    if(cl=="r1column3"){
      update(0,2);
    }
    if(cl=="r2column1"){
      update(1,0);
    }
    if(cl=="r2column2"){
      update(1,1);
    }
    if(cl=="r2column3"){
      update(1,2);
    }
    if(cl=="r3column1"){
      update(2,0);
    }
    if(cl=="r3column2"){
      update(2,1);
    }
    if(cl=="r3column3"){
      update(2,2);
    }
    setCurr(!curr);
  };
  const box={
    height:"30vmin",
    width:"30vmin"
  }
  return (
    <>
    <div id="mainblock">
      <div id="win" style={{display:"none",backgroundColor:"black",height:"50vmin",width:"50vmin",position:"absolute",right:"25%",top:"25%",zIndex:"0"}}>
        <p style={{color:"white",position:"absolute",left:"35%",top:"50%"}}>
          WINNER {winner}
        </p>
      </div>
      <div id="row1" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r1column1" onClick={handleClick} style={box}></button>
        <button id="r1column2" onClick={handleClick} style={box}></button>
        <button id="r1column3" onClick={handleClick} style={box}></button>
      </div>
      <div id="row2" style={{zIndex:"2", display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r2column1" onClick={handleClick} style={box}></button>
        <button id="r2column2" onClick={handleClick} style={box}></button>
        <button id="r2column3" onClick={handleClick} style={box}></button>
      </div>
      <div id="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="r3column1" onClick={handleClick} style={box}></button>
        <button id="r3column2" onClick={handleClick} style={box}></button>
        <button id="r3column3" onClick={handleClick} style={box}></button>
      </div>
    </div>
    </>
  );
}

export default App;
