import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
import './tik.css';
/* <FontAwesomeIcon icon={faXmark} size="5x" /> */
/* <FontAwesomeIcon icon={faCircle} size="5x"/> */
function App() {
  return (
    <div className="row" style={{display:"flex",justifyContent:"center",alignContent:"center"}}>
      <button className="column" style={{height:"35vh",width:"35vw"}}></button>
      <button className="column"></button>
      <button className="column"></button>            
    </div>
  );
}

export default App;
