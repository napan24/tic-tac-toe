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
  const [turn,setTurn]=useState(0);
  const [test,setTest]=useState("");
  const [row1,setRow1]=useState(-1);
  const [col1,setCol1]=useState(-1);
  const handleClick = event => {
    if(win==true){
      return;
    }
    const cl=event.currentTarget.id;
    document.getElementById(cl).style.background ="url("+circle+")";
    document.getElementById(cl).style.backgroundSize="cover";
    document.getElementById(cl).style.backgroundRepeat="no-repeat";
    let a;
    if(cl=="11"){
      update(0,0);
    }
    if(cl=="12"){
      update(0,1);
    }
    if(cl=="13"){
      update(0,2);
    }
    if(cl=="21"){
      update(1,0);
    }
    if(cl=="22"){
      update(1,1);
    }
    if(cl=="23"){
      update(1,2);
    }
    if(cl=="31"){
      update(2,0);
    }
    if(cl=="32"){
      update(2,1);
    }
    if(cl=="33"){
      update(2,2);
    }
    setTurn(turn+1);
  };
  useEffect(() => {
    if(turn>0){
        Comp();
    }
  }, [turn])
  useEffect(() => {
    if(row1!=-1&&col1!=-1){
        updatec(row1,col1);
    }
  }, [row1,col1])
  function Comp(){
    setCurr(false);
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==="+"){
                if(funcComp(i,j)==true){
                    setCurr(true);
                    winnerc();
                    return;
                }
            }
        }   
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]==="/"){
                if(funcComp(i,j)==true){
                    setCurr(true);
                    return;
                }
            }
        }   
    }
    for(let i=0;i<3;i++){
        for(let j=0;j<3;j++){
            if(board[i][j]===" "){
                setCol1(j);
                setRow1(i);
                return;
            }
        }   
    }
    setCurr(true);
  }
  function updatec(r,c){
    if(r==0&&c==0){
        document.getElementById("11").style.background ="url("+cross+")";
    }
    else if(r==0&&c==1){
        document.getElementById("12").style.background ="url("+cross+")";
    }
    else if(r==0&&c==2){
        document.getElementById("13").style.background ="url("+cross+")";
    }
    if(r==1&&c==0){
        document.getElementById("21").style.background ="url("+cross+")";
    }
    else if(r==1&&c==1){
        document.getElementById("22").style.background ="url("+cross+")";
    }
    else if(r==1&&c==2){
        document.getElementById("23").style.background ="url("+cross+")";
    }
    if(r==2&&c==0){
        document.getElementById("31").style.background ="url("+cross+")";
    }
    else if(r==2&&c==1){
        document.getElementById("32").style.background ="url("+cross+")";
    }
    else if(r==2&&c==2){
        document.getElementById("33").style.background ="url("+cross+")";
    }
    setBoard((prevstate)=>{
      let newBoard=[...prevstate];
      newBoard[r][c]="+";
      return newBoard;
    });
  }
  function winnerc(){
    document.getElementById("winc").style.display="inline";
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
        console.log(1);
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
      else if(board[r][j]==" "){
        tempi=r;
        tempj=j;
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
      else if(board[r][j]==" "){
        tempi=r;
        tempj=j;
        free=true;
      }
      j--;
    }
    if(count>=2&&free==true){
        console.log(2);
        setRow1(tempi);
        setCol1(tempj);
        return true;
    }
    free=false;
    count=0;
    i=r;
    j=c;
    while(i>=0&&j>=0){
      if(board[i][j]==board[r][c]){
        count++;
      }
      else if(board[i][j]==" "){
        console.log(i,j);
        tempi=i;
        tempj=j;
        free=true;
      }
      i--;
      j--;
    }
    count--;
    i=r;
    j=c;
    while(i<3&&j<3){
      if(board[i][j]==board[r][c]){
        count++;
      }
      else if(board[i][j]==" "){
        tempi=i;
        tempj=j;
        console.log(i,j);
        free=true;
      }
      i++;
      j++;
    }
    if(count>=2&&free==true){
        setRow1(tempi);
        setCol1(tempj);
        console.log(3);
        return true;
    }
    free=false;
    count=0;
    i=r;
    j=c;
    while(i>=0&&j<3){
      if(board[i][j]==board[r][c]){
        count++;
      }
      else if(board[i][j]==" "){
        tempi=i;
        tempj=j;
        free=true;
      }
      i--;
      j++;
    }
    count--;
    i=r;
    j=c;
    while(i<3&&j>=0){
      if(board[i][j]==board[r][c]){
        count++;
      }
      else if(board[i][j]==" "){
        tempi=i;
        tempj=j;
        free=true;
      }
      i++;
      j--;
    }
    if(count>=2&&free==true){
        console.log(4);
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
    console.log("a");
    setWin(false);
    setWinner("");
    setBoard([[" "," "," "],[" "," "," "],[" "," "," "]]);
    document.getElementById("31").style.background="none";
    document.getElementById("32").style.background="none";
    document.getElementById("33").style.background="none";
    document.getElementById("21").style.background="none";
    document.getElementById("22").style.background="none";
    document.getElementById("23").style.background="none";
    document.getElementById("11").style.background="none";
    document.getElementById("12").style.background="none";
    document.getElementById("13").style.background="none";
    document.getElementById("win").style.display="none";
    document.getElementById("winc").style.display="none";
  }
  const box={
    height:"30vmin",
    width:"30vmin"
  }
  return (
    <>
    <div id="winc" class="alert alert-success" style={{ display: "none",zIndex:"2",position:"absolute" }} role="alert">
        <span id="winner1"> Computer&nbsp; is the winner</span>
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
        <button id="11" onClick={handleClick} style={box}></button>
        <button id="12" onClick={handleClick} style={box}></button>
        <button id="13" onClick={handleClick} style={box}></button>
      </div>
      <div id="row2" style={{zIndex:"2", display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="21" onClick={handleClick} style={box}></button>
        <button id="22" onClick={handleClick} style={box}></button>
        <button id="23" onClick={handleClick} style={box}></button>
      </div>
      <div id="row" style={{ display: "flex", justifyContent: "center", alignContent: "center" }}>
        <button id="31" onClick={handleClick} style={box}></button>
        <button id="32" onClick={handleClick} style={box}></button>
        <button id="33" onClick={handleClick} style={box}></button>
      </div>
    </div>
  </>
  );
}

export default Vscomp;