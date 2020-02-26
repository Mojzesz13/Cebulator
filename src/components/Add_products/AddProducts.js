import React, {useState, useEffect} from 'react';
import Alert from "./Alert";
import AddProductForm from "./AddProductForm";
import AddProductList from "./AddProductList";
import FooterProduct from "./FooterProduct"
import "./AddProducts.scss"
import uuid from "uuid/v4"

const AddProducts = () => {

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
            <Alert expenditure={expenditure}/>
            <header style={  {color:"black"}}> Food </header>
            <main className="Add products">
                <AddProductForm expName={expName}
                                expValue={expValue}
                                handleName={handleName}
                                handleValue={handleValue}
                                handleSubmit={handleSubmit}
                />
                <AddProductList expenditure={expenditure}
                                handleDelete={handleDelete}
                                deleteExpenditure={deleteExpenditure}/>
            </main>
            <FooterProduct expenditure={expenditure}/>
            </div>
        </>

    );
};

export default AddProducts;


//
// const initialExpenditure = [
//     {id: uuid(), name: "warzywa", amount: 12},
//     {id: uuid(), name: "mieso", amount: 15},
//     {id: uuid(), name: "nabial", amount: 17},
//     {id: uuid(), name: "napoje", amount: 13},
//     {id: uuid(), name: "slodycze", amount: 19}
// ];