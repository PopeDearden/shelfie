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
      list: [],
      selectedProduct: ['none'],
    }
    this.selectedProduct = this.selectedProduct.bind(this)
    this.refreshInventory = this.refreshInventory.bind(this)
    // this.refreshInventory2 = this.refreshInventory2.bind(this)
    // this.refresh = this.refreshInventory.bind(this)
  }
componentDidMount() {
  axios.get('/api/inventory').then(res=> {
    this.setState({ list: res.data })
  })
}
refreshInventory() {
  axios.get('/api/inventory').then(res=> {
    this.setState({ list: res.data })
    console.log('SUCCESS!')
  })
}
selectedProduct(el) {
  this.setState({selectedProduct: el})
  console.log('select hit')
  console.log(this.state.selectedProduct)
}
  render() {
  return (

    <div className="App">
      <Dashboard
      list={this.state.list}
      refreshInventory={this.refreshInventory}
      selectProduct = {this.selectedProduct}
      />
      <Form 
      selectedProduct={this.state.selectedProduct}
      refreshInventory={this.refreshInventory}/>
      <Header />
  
    </div>
  )
}
}

export default App;
