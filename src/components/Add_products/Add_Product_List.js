import React from 'react';
import {FaTrashAlt} from "react-icons/fa";
import {FaRegWindowClose} from "react-icons/fa";


const Add_Product_List = ({
                              expenditure,
                              handleDelete,
                              deleteExpenditure
                          }) => {
    if (expenditure.length === 0) {
        return null

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
                                <FaRegWindowClose/></button>
                        </li>
                    })}
                </div>
            </ul>
            {expenditure.length > 0 && (<button className="btn" onClick={deleteExpenditure}>delete expenditure
                <FaTrashAlt className="btn-icon"/></button>)}

        </div>
    );
};

export default Add_Product_List;