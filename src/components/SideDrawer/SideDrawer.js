import React from 'react';
import "./SideDrawer.scss"
import {NavLink} from "react-router-dom"

const SideDrawer = ({categories}) => {

    return (
        <nav className= "side-drawer" >
            <ul>
                {categories.map(category=>(<li><NavLink to={"/category/"+ category} className="btn__nav">
                    {category}
                </NavLink></li>))}
            </ul>
        </nav>
    );
};
export default SideDrawer;



