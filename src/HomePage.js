import React from 'react';
import './HomePage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTiktok, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';



// functional component for Home Page
function Home() {
    return (
        <div>
            <nav className="navbar">
                <a href="#" className="logo">Bread of Life Bakery</a>
                    <ul class="menu">
                        <li className='social-icon'><a href="#">Home</a></li>
                        <li className='social-icon'><a href="#">About</a></li>
                        <li className='social-icon'><a href="#">Menu</a></li>
                        
                    </ul>
                       
                        <div className="search-bar social-media-icons">
                            <div>
                                <FontAwesomeIcon icon={faInstagram} className='social-icon'/>
                                <FontAwesomeIcon icon={faTiktok} className='social-icon'/>
                                <FontAwesomeIcon icon={faTwitter} className='social-icon'/>
                            </div>
                            <FontAwesomeIcon icon={faSearch} className='social-icon'/>
                            <input type="text" placeholder="Search"/>
                            <button>Search</button>
                        </div>
                 </nav>
            <div>
                <h1>Bread.</h1>
                <p className='bakery-slogan'>It's the simple pleasures in life</p>
            </div>
           
        </div>
        

    )
}


export default Home;