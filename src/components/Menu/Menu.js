import React, {useState} from 'react';
import {NavLink} from "react-router-dom"
import "./Menu.scss"
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../SideDrawer/BackDrop";
import Footer from "./Footer"
import Logo from "../icons/mainLogo2.png";
import closeCategory from "../icons/closeCategory.png";
import onion from "../icons/onion.png";

const Menu = () => {
    const [categories, setCategories] = useState(["Food", 'Domestic'," Transport", "Entertainment", "a", "b"]);
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [taskInput, setTaskInput] = useState("");

    const handlerDrawerToggleClick = ()=> {
        setSideDrawerOpen((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    const handlerBackdropClick = () => {
        setSideDrawerOpen( false)
    };

    const handlerAddNewCategory = ()=>{
        setCategories(prevState => [
            ...prevState, taskInput
        ]);
    };

    // const handlerDeleteCategory = (category,e)=>{
    //
    //     console.log(category)
    //
    //     // let deleteCategory = categories.filter(item => item[e] !==e);
    //     //     setCategories(deleteCategory)
    //
    // };

    let backDrop;
    let sideDrawer;

    if (sideDrawerOpen) {
        sideDrawer = <SideDrawer categories={categories} />;
        backDrop = <BackDrop click={handlerBackdropClick}/>
    }

    // let sumOfCost = ()=>{
    //
    //     let test = localStorage.getItem("expenditure").map((item)=>{
    //         return item.name
    //     });
    //         return console.log(test);
    //
    // };


    return (
        <>
            <div className="container">
                <Toolbar categories={categories} handlerDrawerToggle={handlerDrawerToggleClick}/>
                {sideDrawer}
                {backDrop}
                <div> <img className="onionIcon"  src={Logo} alt="onion"/></div>
                <main className="categories">
                    <div>
                    {categories.map(category=>(<NavLink to={"/category/"+ category} className="btn category">{category}
                        <span><img className="onionIcon"  src={onion} alt="onion"/> </span>
                        </NavLink> ))}
                    </div>
                    {/*<div>*/}
                    {/*{categories.map(category=>(*/}
                    {/*<img className="categoryClose"*/}
                    {/*     src={closeCategory }*/}
                    {/*     alt="onion"*/}
                    {/*     onClick={(e)=>handlerDeleteCategory(category,e)}/>))}*/}
                    {/*</div>*/}
                </main>
                <div className="addNewCategory">
                    <input type="text"
                           placeholder="New category name"
                           value={taskInput}
                           onChange= {(e)=>{setTaskInput(e.target.value)}}/>
                <button className="btn addNewCat" onClick={handlerAddNewCategory}>Add new category</button>
                </div>
                <Footer/>
                {/*<Footer sum={sumOfCost()}/>*/}
            </div>
        </>
    );
};

export default Menu;

