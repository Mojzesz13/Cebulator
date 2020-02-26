import React from 'react';
import "./Menu.scss"


const AlertMenu = ({expenditure}) => {

    const todayDate =  new Date().toLocaleDateString('en-GB');
    const total = expenditure;

    return (



        <div className="alert">
            <p className="budget">budzet</p>
            <p className="Expenses">Expenses:</p>
            <p className="data">{todayDate} </p>
        </div>
    );

};

export default AlertMenu;