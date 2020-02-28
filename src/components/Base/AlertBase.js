import React from 'react';
import "./AddProductsBase.scss"
import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";


const AlertBase = ({expenditure, handlerDrawerToggle}) => {

    const todayDate = new Date().toLocaleDateString('en-GB');
    const total = expenditure;

    let ShowExpenses;
    if (expenditure.length === 0) {
        ShowExpenses = <p className="Expenses">Expenses:<span> 0</span>{" "}zł </p>
    } else {
        ShowExpenses = <p className="Expenses">Expenses:<span> {total.reduce((acc, curr) => {
            return (acc += parseInt(curr.amount));
        }, 0)} {" "}zł</span></p>;
    }

    return (
        <div className="alert">
            <div className="toolbar__toggle-button">
                <DrawerToggleButton/>
            </div>
            <div className="alert-text">
                {ShowExpenses}
                <p className="data">{todayDate} </p>
            </div>
        </div>
    );

};

export default AlertBase;