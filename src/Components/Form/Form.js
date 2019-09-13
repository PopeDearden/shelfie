import React, { Component } from 'react'
import axios from 'axios'

export default class Form extends Component {
constructor() {
    super()
    this.state= {
            name: '',
            image: '',
            price: 0
    }
}
        handleNameChange (e) {
            this.setState({name: e.target.value})
            // console.log(`${this.state.name}`)
        }
        handlePriceChange (e) {
            this.setState({price: e.target.value})
            // console.log(this.state.price)
        }
        handleImageChange(e) {
            this.setState({image: e.target.value})
            // console.log(this.state.image)
        }
        cancelReset() {
            this.setState({name: '',
            image: '',
            price: 0})
            console.log(this.state)
        }

render() {
    return (
        <div>
            Form
            <input onChange={e=>this.handleNameChange(e)}/>
            <input onChange={e=>this.handlePriceChange(e)}/>
            <input onChange={e=>this.handleImageChange(e)}/>
            <button onClick={()=>this.cancelReset()}>Cancel</button>
            <button>Add To Inventory</button>
            
        </div>
    )
}
}