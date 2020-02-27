import React from 'react';
import {NavLink} from "react-router-dom"
import "./Toolbar.scss"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton"


const Toolbar = ({categories, handlerDrawerToggle, expenditure}) => {


    // const todayDate =  new Date().toLocaleDateString('en-GB');
    // const total = expenditure;
    // let toolbarStatement;

   //
   //  if(expenditure.length ===0){
   //      return (
   //
   //
   //          toolbarStatement = (
   //          <div className="toolbarStatement">
   //              <p className="Expenses">Expenses:<span> 0</span> </p>
   //              <p className="data">{todayDate} </p>
   //          </div>
   //      );
   // else {
   //
   //          toolbarStatement =
   //
   //
   //
   //          <div className="alert">
   //              <p className="budget">budzet</p>
   //              <p className="Expenses">Expenses:<span> {total.reduce((acc, curr) =>{
   //                  return (acc += parseInt(curr.amount));
   //              },0)} {" "}zł</span></p>
   //              <p className="data">{todayDate} </p>
   //          </div>
   //      );
   //  }
   //  };












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

