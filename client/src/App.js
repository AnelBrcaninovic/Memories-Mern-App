import React from 'react';
import {Container} from "@material-ui/core";

import { BrowserRouter,Switch, Route } from 'react-router-dom';
import { GoogleOAuthProvider } from '@react-oauth/google';

import Navbar from './components/navbar/navbar';
import Home from './components/home/home';
import Auth from './components/auth/auth';



const App = () =>{

    return(
        <GoogleOAuthProvider clientId="316952771777-2mo4duu8rnavgt6h6sgh2ot7ubahb3mi.apps.googleusercontent.com">
            <BrowserRouter>
                <Container maxwidth="lg">
                    <Navbar />
                    <Switch>
                        <Route path="/auth" exact component={Auth} />
                        <Route path="/" exact component={Home} />
                    </Switch>
                </Container>
            </BrowserRouter>
        </GoogleOAuthProvider>
    );
}
export default App;