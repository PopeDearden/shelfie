import React, { Component } from 'react'
import axios from 'axios'


export default class Form extends Component {
    constructor() {
        super()
        this.state = {
            name: null,
            image: null,
            price: null,
            selectedProductID: null,
            buttonSave: true,
        }
    }
    componentDidMount() {
        this.setState({
            buttonSave: true,
        })
        console.log(this.state)
    }
    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props !== prevProps) {
            this.setState({
                selectedProductID: this.props.selectedProduct.product_id,
                name: this.props.selectedProduct.name,
                image: this.props.selectedProduct.image,
                price: this.props.selectedProduct.price,
                buttonSave: false,
            })
        }
      }
    // componentDidUpdate(prevProps) {
    //     // console.log(this.props)
    //     // console.log(prevProps)
    //     if (this.props === prevProps){
    //         alert('the same')
    //     } else{
    //         this.setState({
    //             selectedProductID: this.props.selectedProduct.product_id,
    //             name: this.props.selectedProduct.name,
    //             image: this.props.selectedProduct.image,
    //             price: this.props.selectedProduct.price,
    //             buttonSave: false,
    //         })
    //         console.log(this.state)
    //         console.log('update happened')
    //     }
    // }
    handleNameChange(e) {
        this.setState({ name: e.target.value })
        // console.log(`${this.state.name}`)
    }
    handlePriceChange(e) {
        this.setState({ price: e.target.value })
        // console.log(this.state.price)
    }
    handleImageChange(e) {
        this.setState({ image: e.target.value })
        // console.log(this.state.image)
    }
    cancelReset() {
        this.setState({
            name: 'Enter Name',
            image: '',
            price: 0,
            buttonSave: true,
            selectedProductID: null
        })
        console.log('reset state')
    }
    postProduct(body) {
        axios.post('api/product', body).then(() => {
            this.props.refreshInventory()
            // console.log(this.props)
            this.cancelReset()
        })
            .catch(error => {
                alert('the damn thing didnt work')
            })
    }
    putProduct(body) {
        console.log(body)
    }

    render() {
        return (
            <div>
                Form
           Name <input value={this.state.name} onChange={e => this.handleNameChange(e)} />
                Price <input value={this.state.price} onChange={e => this.handlePriceChange(e)} />
                Image <input value={this.state.image} onChange={e => this.handleImageChange(e)} />
                <button onClick={() => this.cancelReset()}>Cancel</button>
                
                {this.state.buttonSave ? (
                    <button onClick={() => this.postProduct(this.state)}>Add To Inventory</button>

                ) : (
                    <button onClick={() => this.putProduct(this.state)}>Save them Changes</button>
                    )}


            </div>
        )
    }
}