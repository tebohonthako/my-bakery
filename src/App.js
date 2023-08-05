import logo from './logo.svg';
import './App.css';
// importing Routes 
import {Routes, Route} from 'react-router-dom';
// importing my components or pages 
import Home from './HomePage';
// import Aboutpage from './AboutPage';
// import MenuPage from './MenuPage';
// end of my imported components 

function App() {
  return (
    <div>
      <Home/>
      {/* <Aboutpage/>
      <MenuPage/> */}
    </div>
  );
}

export default App;
