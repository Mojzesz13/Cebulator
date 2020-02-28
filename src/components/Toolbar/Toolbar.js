import React from 'react';
import {NavLink} from "react-router-dom"
import "./Toolbar.scss"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"

const Toolbar = ({categories, handlerDrawerToggle,}) => {
    return (
        <header className="toolbar">
            <nav className="toolbar__navigation">
                <div className="toolbar__toggle-button">
                    <DrawerToggleButton click={handlerDrawerToggle}/>
                </div>
                <div className="toolbar__logo"><a href='/'>Cebulator</a></div>
                <div className="spacer"></div>
                <div className="toolbar__text">
                    <div className="toolbar__navigation__items">
                        <ul>
                            {categories.map(category => (<li><NavLink to={"/category/" + category} className="btn__nav">
                                {category}
                            </NavLink></li>))}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Toolbar;

