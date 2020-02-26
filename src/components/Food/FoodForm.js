import React from 'react';
import onion from "../icons/onion.png";

const FoodForm = ({
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
                    <lable htmlFor="name"></lable>
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
                    <lable htmlFor="amount"></lable>
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
                    Submit <span><img className="onionIcon"  src={onion} alt="onion"/></span>
                </button>
            </div>
        </form>
    );
};

export default FoodForm;