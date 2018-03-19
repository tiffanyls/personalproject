import React from 'react';
import { Switch, Route } from 'react-router-dom';


import Home from './Components/Home/Home';
import UserAccount from './Components/UserAccount/UserAccount';
import Map from './Components/UserAccount/UserUploader/Map/Map';
import UserUploader from './Components/UserAccount/UserUploader/UserUploader';


export default (
    <Switch>
        <Route exact path='/' component = {Home} />
        <Route path='/user' component = {UserAccount} />
        <Route path='/imageuploader' component = {UserUploader}/>
        <Route path='/map' component = {Map}/>
        <Route path='*' render={ () =>(
            <div> 
            <p>Not Found</p>
            </div>
        )} />
    </Switch>
);