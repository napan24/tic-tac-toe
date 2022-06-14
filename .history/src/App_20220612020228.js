import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function App() {
  return (
    <div className="App">
      <FontAwesomeIcon icon={faXmark} size="2x" />
    </div>
  );
}

export default App;
