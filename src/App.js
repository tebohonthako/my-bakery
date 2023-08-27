import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './HomePage';
import MenuPage from './MenuPage';
import About from './AboutPage'

function App() {
    return (
        <Router>
            <div>
                {/* Include the Home component outside of the Routes */}
                <Home />
                {/* Define routes using the Routes component */}
                <Routes>
                     <Route path="/about" element={<About />} />
                    <Route path="/menu" element={<MenuPage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
