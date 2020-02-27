import React, {useState, useEffect} from 'react';
import AlertHomeDomestic from "./AlertHomeDomestic";
import HomeDomesticForm from "./HomeDomesticForm";
import ListHomeDomestic from "./ListHome Domestic";
import FooterHomeDomestic from "./FooterHomeDomestic"
import "./HomeDomestic.scss"
import uuid from "uuid/v4"

const HomeDomestic = () => {

    const initialExpenditure = localStorage.getItem("expenditure")?
        JSON.parse(localStorage.getItem("expenditure")): [];


    const[expenditure, setExpenditure] = useState(initialExpenditure);
    const[expName, setExpName] = useState("");
    const[expValue, setExpValue] = useState("");

    useEffect(()=>{
        localStorage.setItem("expenditure", JSON.stringify(expenditure))
    },[expenditure]);


    const handleName = (e) => {
        setExpName(e.target.value)
    };

    const handleValue = (e) => {
        setExpValue(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(expName !== "" && expValue >0){
            const creatNewObj = {id:uuid(), name:expName, amount:expValue};
            setExpenditure([...expenditure,creatNewObj]);

            setExpName("");
            setExpValue("");
        }
    };

    const handleDelete =(id)=>{
        let tempExpenditure = expenditure.filter(item=> item.id !== id);
            setExpenditure(tempExpenditure)
    };

    const deleteExpenditure =()=>{
        setExpenditure([]);
    };

    return (
        <>
            <div className="container">
            <AlertHomeDomestic expenditure={expenditure}/>
            <header style={  {color:"black"}}>Home Domestic</header>
            <main className="Add products">
                <HomeDomesticForm expName={expName}
                                  expValue={expValue}
                                  handleName={handleName}
                                  handleValue={handleValue}
                                  handleSubmit={handleSubmit}
                />
                <ListHomeDomestic expenditure={expenditure}
                                  handleDelete={handleDelete}
                                  deleteExpenditure={deleteExpenditure}/>
            </main>
            <FooterHomeDomestic expenditure={expenditure}/>
            </div>
        </>

    );
};

export default HomeDomestic;


//
// const initialExpenditure = [
//     {id: uuid(), name: "warzywa", amount: 12},
//     {id: uuid(), name: "mieso", amount: 15},
//     {id: uuid(), name: "nabial", amount: 17},
//     {id: uuid(), name: "napoje", amount: 13},
//     {id: uuid(), name: "slodycze", amount: 19}
// ];