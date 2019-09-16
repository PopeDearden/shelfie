  
import React from "react"
import { Switch, Route } from "react-router-dom"
import Dashboard from "./Components/Dashboard/Dashboard"
import Form from "./Components/Form/Form"
import Product from './Components/Product/Product'
import Header from './Components/Header/Header'

export default (
    <Switch>
        <Route component={Dashboard} exact path= "/"/>
        <Route component={Form} path="/add"/>
        <Route component={Form} path="/edit/:id"/>
    </Switch>
)