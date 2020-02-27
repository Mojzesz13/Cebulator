import React from 'react';
import "./BackDrop.scss";
import returnIcon from "../icons/return.png";


const BackDrop = ({click}) => {
    return (
        <div className="backDrop" onClick={click}>
            <div> <img className="returnIcon"  src={returnIcon} alt="onion"/></div>
        </div>
    );
};

export default BackDrop;