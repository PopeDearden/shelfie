import React, { Component } from 'react'
import axios from 'axios'
import Product from '../Product/Product'

export default class Form extends Component {

render() {
    return (
        <div className='Dashboard'>
            {this.props.list.map((el,index)=>(
                <Product
                key={index}
                product = {el} />
            ))}
        </div>
    )
}
}