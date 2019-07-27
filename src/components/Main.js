import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from '../containers/Home';
import Favorites from '../containers/Favorites';

const Main = (props) => {
    return (
        <div>
           <Switch>
               <Route exact path='/Home' component={Home}/>
               <Route path='/Favorites' component={Favorites}/>
            </Switch> 
        </div>
        
    )};


export default Main