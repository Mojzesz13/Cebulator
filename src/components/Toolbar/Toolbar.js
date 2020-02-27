import React from 'react';
import {NavLink} from "react-router-dom"
import onion from "../icons/onion.png";
import "./Toolbar.scss"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"


const Toolbar = ({categories, handlerDrawerToggle}) => {
    return (

      <header className="toolbar">
       <nav className="toolbar__navigation">
        <div>
        <DrawerToggleButton click={handlerDrawerToggle}/>
        </div>
           <div className="toolbar__logo"><a href='/'>LOGO</a></div>
           <div className="spacer"></div>
           <div className="toolbar__navigation__items">
               <ul>
               {categories.map(category=>(<li><NavLink to={"/category/"+ category} className="btn__nav">
                 {category}
                  </NavLink></li>))}
               </ul>
           </div>


       </nav>
      </header>
    );
};

export default Toolbar;

