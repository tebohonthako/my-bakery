import React from 'react';
import pastries from './Pastries'; // Importing dummy JSON data 
import './MenuPage.css'

function Menu() {
    return(
        <div className="pastries-container">
            <h2>M E N U </h2>
        {pastries.map(pastry => (
            <div key={pastry.id} className="pastry-item">
                <img src={ process.env.PUBLIC_URL + pastry.image} alt={pastry.name} className="pastry-image" />
                <h2>{pastry.name}</h2>
                <p className="pastry-price">${pastry.price.toFixed(2)}</p>
                <p className="pastry-description">{pastry.description}</p>
            </div>
        ))}
    </div>
    )
}

export default Menu;