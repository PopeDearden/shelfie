import React, { Component } from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'
import axios from 'axios'

class App extends Component {
  constructor() {
    super();
    this.state={
      list: []
    }
    this.refreshInventory = this.refreshInventory.bind(this)
  }
componentDidMount() {
  axios.get('/api/inventory').then(res=> {
    this.setState({ list: res.data })
  })
}
refreshInventory() {
  axios.get('/api/inventory').then(res=> {
    this.setState({ list: res.data })
  })
}
  render() {
  return (

    <div className="App">
      <Dashboard 
      list={this.state.list}/>
      <Form 
      refreshInventory = {this.refreshInventory}/>
      <Header />
  
    </div>
  )
}
}

export default App;
