import React from 'react';
import "./HomeDomestic.scss"


const AlertHomeDomestic = ({expenditure}) => {

    const todayDate =  new Date().toLocaleDateString('en-GB');
    const total = expenditure;

    if(expenditure.length ===0){
        return (
            <div className="alert">
                <p className="title">Cebulator</p>
                <p className="Expenses">Expenses:<span> 0</span> </p>
                <p className="data">{todayDate} </p>
            </div>
        )
    }else {

    return (



        <div className="alert">
            <p className="budget">budzet</p>
            <p className="Expenses">Expenses:<span> {total.reduce((acc, curr) =>{
                return (acc += parseInt(curr.amount));
            },0)} {" "}zł</span></p>
            <p className="data">{todayDate} </p>
        </div>
    );
    }
};

export default AlertHomeDomestic;