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
function Vscomp() {
  const [board,setBoard]=useState([[" "," "," "],[" "," "," "],[" "," "," "]]);
  const [curr,setCurr]=useState(true);
  const [row,setRow]=useState(0);
  const [col,setCol]=useState(0);
  const [win,setWin]=useState(false);
  const [winner,setWinner]=useState("");
  const [test,setTest]=useState("");
  const [row1,setRow1]=useState(0);
  const [col1,setCol1]=useState(0);
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
    if(win==false){
        Comp();
    }
  };
  function Comp(){
    setCurr(false);
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==="/"){
                funcComp(i,j);
            }
            else if(board[i][j]==="+"){
                funcComp(i,j);
            }
        }   
    }
    setCurr(true);
  }
  function updatec(r,c){
    setBoard((prevstate)=>{
      let newBoard=[...prevstate];
      newBoard[r][c]="+";
      return newBoard;
    });
  }
  function winnerc(){
    document.getElementById("winner").style.display="inline";
  }
  function funcComp(r,c){
    let free=false;
    if(board[r][c]===" "){
      return false;
    }
    let count=0;
    let i=r;
    let tempi;
    let tempj;
    while(i<3){
      if(board[i][c]==board[r][c]){
        count++;
      }
      else if(board[i][c]==" "){
        tempi=i;
        tempj=c;
        free=true;
      }
      i++;
    }
    count--;
    i=r;
    while(i>=0){
      if(board[i][c]==board[r][c]){
        count++;
      }
      else if(board[i][c]==" "){
        tempi=i;
        tempj=c;
        free=true;
      }
      i--;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    let j=c;
    count=0;
    free=false;
    while(j<3){
      if(board[r][j]==board[r][c]){
        count++;
      }
      else if(board[i][c]==" "){
        tempi=i;
        tempj=c;
        free=true;
      }
      j++;
    }
    count--;
    j=c;
    while(j>=0){
      if(board[r][j]==board[r][c]){
        count++;
      }
      else if(board[i][c]==" "){
        tempi=i;
        tempj=c;
        free=true;
      }
      j--;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    count=0;
    i=r;
    j=c;
    while(i>=0&&j>=0){
      if(board[i][j]==board[r][c]){
        count++;
      }
      i--;
      j--;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    count--;
    i=r;
    j=c;
    while(i<3&&j<3){
      if(board[i][j]==board[r][c]){
        count++;
      }
      i++;
      j++;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    count=0;
    i=r;
    j=c;
    while(i>=0&&j<3){
      if(board[i][j]==board[r][c]){
        count++;
      }
      i--;
      j++;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    count--;
    i=r;
    j=c;
    while(i<3&&j>=0){
      if(board[i][j]==board[r][c]){
        count++;
      }
      i++;
      j--;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    return false;
  }
  function update(r,c){
    setBoard((prevstate)=>{
      let newBoard=[...prevstate];
      newBoard[r][c]="/";
      return newBoard;
    });
    setRow(r);
    setCol(c);
  }
  useEffect(() => {
    func();
  }, [row,col]);
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
      return;
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
      return;
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
      return;
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
      return;
    }
    count=0;
    i=row;
    j=col;
    while(i>=0&&j>=0){
      if(board[i][j]==board[row][col]){
        count++;
      }
      i--;
      j--;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
      return;
    }
    count--;
    i=row;
    j=col;
    while(i<3&&j<3){
      if(board[i][j]==board[row][col]){
        count++;
      }
      i++;
      j++;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
      return;
    }
    count=0;
    i=row;
    j=col;
    while(i>=0&&j<3){
      if(board[i][j]==board[row][col]){
        count++;
      }
      i--;
      j++;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
      return;
    }
    count--;
    i=row;
    j=col;
    while(i<3&&j>=0){
      if(board[i][j]==board[row][col]){
        count++;
      }
      i++;
      j--;
    }
    if(count==3){
      setWinner(board[row][col]);
      setWin(true);
      return;
    }
  }
  useEffect(() => {
    if(win==true){
      document.getElementById("win").style.display="inline";
    }
  }, [win]);
  function Clear(){
    setWin(false);
    setWinner("");
    setBoard([[" "," "," "],[" "," "," "],[" "," "," "]]);
    document.getElementById("r3column1").style.background="none";
    document.getElementById("r3column2").style.background="none";
    document.getElementById("r3column3").style.background="none";
    document.getElementById("r2column1").style.background="none";
    document.getElementById("r2column2").style.background="none";
    document.getElementById("r2column3").style.background="none";
    document.getElementById("r1column1").style.background="none";
    document.getElementById("r1column2").style.background="none";
    document.getElementById("r1column3").style.background="none";
    document.getElementById("win").style.display="none";
    document.getElementById("winc").style.display="none";
  }
  const box={
    height:"30vmin",
    width:"30vmin"
  }
  return (
    <>
    <div id="winc" class="alert alert-success" style={{ display: "none",zIndex:"2" }} role="alert">
        <span id="winner"> Computer&nbsp; is the winner</span>
    </div>
    <div id="win" class="alert alert-success" style={{ display: "none",zIndex:"2" }} role="alert">
        <span id="winner"> Player&nbsp; is the winner</span>
    </div>
      <nav class="navbar navbar-light bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand" style={{color:"white"}}>Navbar</a>
          <button onClick={Clear} type="button" class="btn btn-dark">New Game</button>
        </div>
      </nav>
    <div id="mainblock">
      <div id="win" class="alert alert-success" style={{display:"none",position:"absolute",left:"50%"}} role="alert">
      {curr?<FontAwesomeIcon icon={faCircle} size="3x"/>:<FontAwesomeIcon icon={faXmark} size="2x" />}
      <span style={{fontSize:"24px"}}> &nbsp; is the winner</span>  
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

export default Vscomp;