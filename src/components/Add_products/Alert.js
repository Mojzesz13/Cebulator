import React from 'react';
import "./Alert.scss"


const Alert = ({expenditure}) => {

    const todayDate =  new Date().toLocaleDateString('en-GB');
    const total = expenditure;

    const total2 = (total)=> {total.reduce((acc, curr) =>{
        return (acc += parseInt(curr.amount));
    },0)} ;




    if(expenditure.length ===0){
        return (
            <div className="alert">
                <p className="budget">budzet</p>
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

export default Alert;