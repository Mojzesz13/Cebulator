import React, {useState} from 'react';
import AlertMenu from "./AlertMenu";
import Footer from "./Footer"
import "./Menu.scss"
import onion from "../icons/onion.png";
import {NavLink} from "react-router-dom"
import Toolbar from "../Toolbar/Toolbar";
import SideDrawer from "../SideDrawer/SideDrawer";
import BackDrop from "../SideDrawer/BackDrop";



const Menu = () => {
    const categories = ["Food", 'Domestic'," Transport", "Entertainment"];
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);


    const handlerDrawerToggleClick = ()=> {
        setSideDrawerOpen((prevState) => {
            return {sideDrawerOpen: !prevState.sideDrawerOpen}
        });
    };

    const handlerBackdropClick = () => {
        setSideDrawerOpen( false)
    };

    let backDrop;
    let sideDrawer;

    if (sideDrawerOpen) {
        sideDrawer = <SideDrawer categories={categories} />;
        backDrop = <BackDrop click={handlerBackdropClick}/>
    }

    return (
        <>
            <div className="container">
                {/*<AlertMenu />*/}
                <Toolbar categories={categories} handlerDrawerToggle={handlerDrawerToggleClick}/>
                {sideDrawer}
                {backDrop}
                <main className="categories">
                    {categories.map(category=>(<NavLink to={"/category/"+ category} className="btn">{category}
                        <span><img className="onionIcon"  src={onion} alt="onion"/></span></NavLink>))}

                </main>
                <Footer/>
            </div>

        </>

    );
};

export default Menu;



// import React, {useState} from 'react';
// import AlertMenu from "./AlertMenu";
// import Footer from "./Footer"
// import "./Menu.scss"
// import onion from "../icons/onion.png";
// import {NavLink} from "react-router-dom"
// import Toolbar from "../Toolbar/Toolbar";
// import SideDrawer from "../SideDrawer/SideDrawer";
// import BackDrop from "../SideDrawer/BackDrop";
//
//
//
// const Menu = () => {
//     const categories = ["Food", 'Domestic'," Transport", "Entertainment"];
//     const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
//
//
//     const handlerDrawerToggleClick = ()=> {
//         setSideDrawerOpen((prevState) => {
//             return {sideDrawerOpen: !prevState.sideDrawerOpen}
//         });
//     };
//
//     const handlerBackdropClick = () => {
//         setSideDrawerOpen( false)
//     };
//
//
//     let backDrop;
//
//     if (sideDrawerOpen) {
//         backDrop = <BackDrop click={handlerBackdropClick}/>
//     }
//
//     return (
//         <>
//             <div className="container">
//                 {/*<AlertMenu />*/}
//                 <Toolbar categories={categories} handlerDrawerToggle={handlerDrawerToggleClick}/>
//                 <SideDrawer categories={categories} show={sideDrawerOpen}/>
//                 {backDrop}
//                 <main className="categories">
//                     {categories.map(category=>(<NavLink to={"/category/"+ category} className="btn">{category}
//                         <span><img className="onionIcon"  src={onion} alt="onion"/></span></NavLink>))}
//
//                 </main>
//                 <Footer/>
//             </div>
//
//         </>
//
//     );
// };
//
// export default Menu;