import React, {useState, useEffect} from 'react';
import Alert from "./Alert";
import Add_Product_Form from "./Add_Product_Form";
import Add_Product_List from "./Add_Product_List";
import "./AddProducts.scss"
import uuid from "uuid/v4"


//
// const initialExpenditure = [
//     {id: uuid(), name: "warzywa", amount: 12},
//     {id: uuid(), name: "mieso", amount: 15},
//     {id: uuid(), name: "nabial", amount: 17},
//     {id: uuid(), name: "napoje", amount: 13},
//     {id: uuid(), name: "slodycze", amount: 19}
// ];


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

            <Alert expenditure={expenditure}/>
            <p> Food </p>
            <main className="Add products">
                <Add_Product_Form expName={expName}
                                  expValue={expValue}
                                  handleName={handleName}
                                  handleValue={handleValue}
                                  handleSubmit={handleSubmit}
                />
                <Add_Product_List expenditure={expenditure}
                                  handleDelete={handleDelete}
                                  deleteExpenditure={deleteExpenditure}/>
            </main>

        </>

    );
};

export default AddProducts;


//
// const[productName, setProductName] = useState("");
// const[price, setPrice] = useState("");
//
//
//
// let style= {
//     color:"red",
//     height:"2rem",
//     borer:"1px solid green",
//     textAlign:"center"
//
// };
//
// const onChangeName = event => {
//     localStorage.setItem('myValueInLocalStorage', event.target.value);
//     setProductName(event.target.value);
// };
//
// const onChangePrice = event => {
//     localStorage.setItem('myValueInLocalStorage', event.target.value);
//     setPrice(event.target.value);
// };
//
//
//
//
//
// <div style={style}>
//     Header
// </div>
// <div style={style}>Category</div>
// <form onSubmit={}>
//     <input type="text"
//            value={productName}
//            placeholder="Product name"
//            onChange={onChangeName}/>
//     <input type="text"
//            value= {price}
//            placeholder="price"
//            onChange={onChangePrice}/>
//     <button> dodaj</button>
// </form>
// <p>{productName}</p>
// <p>{price}</p>

// const categorys = [
//     {id: uuid(), name: "Food", amount: 10},
//     {id: uuid(), name:  "Bills", amount: 10},
//     {id: uuid(), name:  "Household Chemicals", amount: 10},
//     {id: uuid(), name:  "Entertainment", amount: 10},
//     {id: uuid(), name:  "Transport", amount: 10}
//
// ];