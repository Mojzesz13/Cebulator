import React from 'react';
import logoFooter from "../icons/onion Footer2.png";
import "./Menu.scss"




const Footer = ({expenditure, sum}) => {
    return (
        <div className="footer">
            <p className="cebulator" >For the money, which you have spent you should be able to buy
                {sum} pl
                <span><img className="onion"  src={logoFooter} alt="onion"/></span></p>
        </div>
    );
};

export default Footer;