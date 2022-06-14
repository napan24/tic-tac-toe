import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
/* <FontAwesomeIcon icon={faXmark} size="5x" /> */
/* <FontAwesomeIcon icon={faCircle} size="5x"/> */
function App() {
  return (
    <div className="App" style={{position:"relative"}}>
      <button style={{height:"25vh",width:"25vh",position:"absolute",left:"50%"}}></button>
      <button style={{height:"10rem",width:"10rem",position:"absolute",left:"63%"}}></button>
      <button style={{height:"10rem",width:"10rem",position:"absolute",left:"76%"}}></button>            
    </div>
  );
}

export default App;
