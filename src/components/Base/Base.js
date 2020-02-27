import React, {useState, useEffect} from 'react';
import AlertBaset from "./AlertBaset";
import FormBase from "./FormBase";
import ListBase from "./ListBase";
import FooterBase from "./FooterBase"
import "./AddProductsBase.scss"
import uuid from "uuid/v4"
import Toolbar from "../Toolbar/Toolbar";

const Base = (props) => {

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
            const creatNewObj = {id:uuid(), name:expName, amount:expValue, category: props.match.params.category};
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

        const fileredExpenditure = expenditure.filter((element)=>(element.category !== props.match.params.category));
        setExpenditure(fileredExpenditure);
    };

    const fileredExpenditure = expenditure.filter((element)=>(element.category === props.match.params.category));

    return (
        <>
            <div className="container">
            <AlertBaset expenditure={fileredExpenditure}/>
            {/*<Toolbar expenditure={fileredExpenditure}/>*/}
            <div className="container__title" style={  {color:"black"}}> {props.match.params.category} </div>
            <main className="Add products">
                <FormBase expName={expName}
                          expValue={expValue}
                          handleName={handleName}
                          handleValue={handleValue}
                          handleSubmit={handleSubmit}
                />
                <ListBase expenditure={fileredExpenditure}
                          handleDelete={handleDelete}
                          deleteExpenditure={deleteExpenditure}/>
            </main>
            <FooterBase expenditure={fileredExpenditure}/>
            </div>
        </>

    );
};

export default Base;


//
// const initialExpenditure = [
//     {id: uuid(), name: "warzywa", amount: 12},
//     {id: uuid(), name: "mieso", amount: 15},
//     {id: uuid(), name: "nabial", amount: 17},
//     {id: uuid(), name: "napoje", amount: 13},
//     {id: uuid(), name: "slodycze", amount: 19}
// ];