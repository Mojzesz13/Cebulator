import React from 'react';
import {NavLink} from "react-router-dom"
import "./Toolbar.scss"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"


const Toolbar = ({categories, handlerDrawerToggle, expenditure}) => {






    return (

      <header className="toolbar">
       <nav className="toolbar__navigation">
        <div className="toolbar__toggle-button">
        <DrawerToggleButton click={handlerDrawerToggle}/>
        </div>
           <div className="toolbar__logo"><a href='/'>Cebulator</a></div>
           <div className="spacer"></div>
           <div className="toolbar__text"></div>
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

