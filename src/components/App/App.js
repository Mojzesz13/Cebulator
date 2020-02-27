import React from 'react';
import {HashRouter, Route, Switch} from "react-router-dom"
import './App.scss';
import Menu from "../Menu/Menu";
import Base from "../Base/Base";


function App() {
    return (
        <HashRouter>
                <Switch>
                    <Route exact path='/' component={Menu}/>

                    <Route path='/category/:category' component={Base}/>
                </Switch>
        </HashRouter>
    );
}

export default App;
