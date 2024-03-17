import React from 'react';
import {Container} from "@material-ui/core";

import { BrowserRouter,Switch, Route } from 'react-router-dom';


import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Auth from './components/auth/auth';



const App = () =>{

    return(
        <BrowserRouter>
            <Container maxwidth="lg">
                <Navbar />
                <Switch>
                    <Route path="/auth" exact component={Auth} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Container>
        </BrowserRouter>
    );
}
export default App;