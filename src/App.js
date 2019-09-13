import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Form from './Components/Form/Form'

class App extends Component {
  constructor() {
    super();
    this.state={
      list: [
        {name: 'thing1',
      price: 5,
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
    {name: 'thing2',
      price: 5,
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
    {name: 'thing3',
      price: 5,
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'},
    {name: 'thing4',
      price: 5,
    image: 'https://homepages.cae.wisc.edu/~ece533/images/airplane.png'}
      ]
    }
  }

  render() {
  return (

    <div className="App">
      <Dashboard 
      list={this.state.list}/>
      <Form />
      <Header />
  
    </div>
  )
}
}

export default App;
