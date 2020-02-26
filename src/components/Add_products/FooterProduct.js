import React from 'react';
import logoFooter from "../icons/onionFooter.png";




const FooterProduct = ({expenditure}) => {
    return (
        <div className="footer">
            <p className="cebulator" >Za kase, która wydałeś mógłbys kupic
                <span> {expenditure.reduce((acc, curr) =>{
                    return (acc += parseInt(curr.amount)/1.8);
                },0).toFixed(1)} {" "}</span>
                kg
                <span><img className="onion"  src={logoFooter} alt="onion"/></span></p>
        </div>
    );
};

export default FooterProduct;