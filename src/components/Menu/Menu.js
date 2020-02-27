import React from 'react';
import AlertMenu from "./AlertMenu";
import Footer from "./Footer"
import "./Menu.scss"
import onion from "../icons/onion.png";
import {HashRouter, Route, Switch, NavLink} from "react-router-dom"
import Toolbar from "../Toolbar/Toolbar";



const Menu = () => {
    const categories = ["Food", 'Domestic'," Transport", "Entertainment"];

    return (
        <>
            <div className="container">
                {/*<AlertMenu />*/}
                <Toolbar categories={categories}/>
                <main className="categories">
                    {categories.map(category=>(<NavLink to={"/category/"+ category} className="btn">{category}
                        <span><img className="onionIcon"  src={onion} alt="onion"/></span></NavLink>))}

                </main>
                <Footer/>
            </div>



        </>

    );
};

export default Menu;