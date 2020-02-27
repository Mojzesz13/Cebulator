import React from 'react';
import logoFooter from "../icons/onionFooter.png";
import "./AddProductsBase.scss"




const FooterBase = ({expenditure}) => {
    return (
        <div className="footer">
            <p className="cebulator" >For the money, which you have spent you should be able to buy
                <span> {expenditure.reduce((acc, curr) =>{
                    return (acc += parseInt(curr.amount)/1.8);
                },0).toFixed(1)} {" "}</span>
                kg
                <span><img className="onion"  src={logoFooter} alt="onion"/></span></p>
        </div>
    );
};

export default FooterBase;