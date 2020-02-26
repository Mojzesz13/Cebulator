import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import close from "../icons/close.png";
import logo from "../icons/onionLogo.png";




const AddProductList = ({
                              expenditure,
                              handleDelete,
                              deleteExpenditure
                          }) => {
    if (expenditure.length === 0) {
        return <div className="logo"><img  src={logo} alt="onion"/> </div>

    }

    return (

        <div>
            <ul className="list">
                <div className="itemName">
                    {expenditure.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })}
                </div>
                <div className="ItemAmount">
                    {expenditure.map((item) => {
                        return <li key={item.id}>{item.amount}
                            <button className="delete-btn"
                                    aria-label="delete button"
                                    onClick={() => handleDelete(item.id)}>
                                <img src={close} alt="onion"/></button>
                        </li>
                    })}
                </div>

            </ul>
            {expenditure.length > 0 && (<button className="btn" onClick={deleteExpenditure}>delete expenditure
                <FaTrashAlt className="btn-icon"/></button>)}

        </div>
    );
};

export default AddProductList;