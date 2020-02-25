import React from 'react';
import {IoMdAddCircle} from "react-icons/io";

const Add_Product_Form = ({
                              expName,
                              expValue,
                              handleName,
                              handleValue,
                              handleSubmit
                          }) => {
    return (
        <form onSubmit={handleSubmit}>
            <div className="form-main">
                <div className="form-group">
                    <lable htmlFor="name">name</lable>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="name of expenditure"
                        value={expName}
                        onChange={handleName}
                    />
                </div>

                <div className="form-group">
                    <lable htmlFor="amount">amout</lable>
                    <input
                        type="number"
                        className="form-control"
                        id="amount"
                        name="amount"
                        placeholder="value of expenditure"
                        value={expValue}
                        onChange={handleValue}
                    />
                </div>
                <button type="submit" className="btn">
                    submit
                    <IoMdAddCircle className="btn-icon"/>
                </button>
            </div>
        </form>
    );
};

export default Add_Product_Form;