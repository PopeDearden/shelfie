import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            secret: 'nope'
        }
        // this.refresh = this.refresh.bind(this)
    }
    componentDidMount() {
        console.log(this.props)
    }

    deleteProduct(id) {
        axios.delete(`/api/product/${id}`).then(res => {
            console.log('hit')
            this.props.refreshInventory()
        })
    }
    selectProduct(el) {
        this.props.selectProduct(el)
    }


    render() {
        return (
            <div className='Dashboard'>
                {this.props.list.map((el, index) => (
                    <div
                    key ={index + 'div'}>
                    <Product
                        refreshInventory={this.props.refreshInventory}
                        key={index}
                        product={el}
                        deleteProduct={this.deleteProduct} />
                    <button key = {index + 'button'} onClick={()=>this.deleteProduct(el.product_id)}>Delete</button>
                    <button key = {index + 'button2'} onClick={()=>this.selectProduct(el)}>edit</button>
                        </div>
                ))}
            </div>
        )
    }
}