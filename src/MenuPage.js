import React from 'react';
// import './HomePage.css';
import pastries from './Pastries'; // Importing dummy JSON data 

function Menu() {
    return(
        <div className="pastries-container">
        {pastries.map(pastry => (
            <div key={pastry.id} className="pastry-item">
                <img src={pastry.image} alt={pastry.name} className="pastry-image" />
                <h2>{pastry.name}</h2>
                <p className="pastry-price">${pastry.price.toFixed(2)}</p>
                <p className="pastry-description">{pastry.description}</p>
            </div>
        ))}
    </div>
    )
}

export default Menu;