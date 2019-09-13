import React, { Component } from 'react'
import axios from 'axios'

export default class Product extends Component {

render() {
    return (
        <div>
            <img src={this.props.product.image} alt="product" srcSet=""/>
            <h2>{this.props.product.name}</h2>
            <h4>${this.props.product.price}</h4>
        </div>
    )
}
}