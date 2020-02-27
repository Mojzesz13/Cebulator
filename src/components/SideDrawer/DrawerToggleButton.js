import React from 'react';
import "./DawerToggleButton.scss"


const DrawerToggleButton = ({click}) => {


    return (
        <button className="toggle-button" onClick={click}>
            <div className="hamburger-box">
                <div></div></div>
        </button>


    )

};

export default DrawerToggleButton;