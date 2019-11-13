import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Product from './components/Product'
import Update from './components/Update'
import Index from './components/Index'
import List from './components/List'
import Create from './components/Create';


//criando rotas ReactJS
function Routes() {
    return (
       
            <Switch>
                <Route exact path="/"  component={Index} />
                <Route path="/list" component={List}/>
                <Route path="/update" component={Update}/>
                <Route path="/product" component={Product}/>
                <Route path="/create" component={Create}/>


            </Switch>
    
    )
}

export default Routes;