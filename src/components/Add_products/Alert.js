import React from 'react';
import "./Alert.scss"


const Alert = ({expenditure}) => {

    const todayDate =  new Date().toLocaleDateString();
    const total = expenditure;

    if(expenditure.length ===0){
        return <p>{todayDate}</p>

    }else {

    return (



        <div>
            <p>budzet</p>
            <p className="ExpensesAlert">Expenses:<span> {total.reduce((acc, curr) =>{
                return (acc += parseInt(curr.amount));
            },0)} {" "}zł</span></p>

        </div>
    );
    }
};

export default Alert;