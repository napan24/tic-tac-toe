import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import {faCircle} from '@fortawesome/free-regular-svg-icons';
/* <FontAwesomeIcon icon={faXmark} size="5x" /> */

function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faCircle} size="5x"/>      
    </div>
  );
}

export default App;
