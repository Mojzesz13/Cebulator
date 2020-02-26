import React from 'react';
import AlertMenu from "./AlertMenu";
import Footer from "./Footer"
import "./Menu.scss"
import onion from "../icons/onion.png";


const Menu = () => {
    const categories = ["food", 'domestic'," transport", "entertiment"];

    return (
        <>
            <div className="container">
                <AlertMenu/>
                <main className="categories">
                    {categories.map(category=>(<button className="btn">{category}
                        <span><img className="onionIcon"  src={onion} alt="onion"/></span></button>))}
                </main>
                <Footer/>
            </div>
        </>

    );
};

export default Menu;