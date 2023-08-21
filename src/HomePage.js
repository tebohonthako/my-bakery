import React from 'react';
import './HomePage.css';


// functional component for Home Page
function Home() {
    return (
        <div>
            <nav className="navbar">
                <a href="#" class="logo">Bread of Life Bakery</a>
                    <ul class="menu">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Menu</a></li>
                        
                    </ul>
                        <div className="social-media-icons">
                            <a href="#"><i class="fab fa-instagram"></i></a>
                            <a href="#"><i class="fab fa-tiktok"></i></a>
                        </div>
                        <div className="search-bar">
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