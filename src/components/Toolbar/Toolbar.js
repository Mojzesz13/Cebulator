import React from 'react';
import {NavLink} from "react-router-dom"
import onion from "../icons/onion.png";
import "./Toolbar.scss"


const Toolbar = ({categories}) => {
    return (

      <header className="toolbar">
       <nav className="toolbar__navigation">
        <div className="burger"> </div>
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

