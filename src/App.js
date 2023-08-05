import logo from './logo.svg';
import './App.css';
// importing Routes 
import {Routes, Route} from 'react-router-dom';
// importing my components or pages 
import HomePage from './HomePage';
import Aboutpage from './AboutPage';
import MenuPage from './MenuPage';
// end of my imported components 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hi Teboo!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
